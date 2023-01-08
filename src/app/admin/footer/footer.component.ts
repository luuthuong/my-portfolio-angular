import { FirebaseService } from 'src/app/services/firebase.service';
import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/shared/components/base-component.component';
import { Location } from '@angular/common';
import { IContact } from 'src/app/shared/models/contact.model';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent extends BaseComponent implements OnInit {
  footerData: IContact[] = [];
  formFooter !: {
    en: FormGroup,
    vi: FormGroup
  };

  constructor(
    private location: Location,
    private firebaseService: FirebaseService,
    private fb: FormBuilder
  ) {
    super();
  }

  async ngOnInit(): Promise<void> {
    this._buildFormFooter();
    await this._getContactInformation();
  }

  private _buildFormFooter() {
    this.formFooter = {
      en:  new FormGroup({
        content: new FormControl(''),
        id: new FormControl({
          value: null,
          disabled: true
        })
      }),
      vi: new FormGroup({
        content: new FormControl(''),
        id: new FormControl({
          value: null,
          disabled: true
        })
      })
    }
  }

  private async _getContactInformation() {
    const result = await this.firebaseService.getCollection<IContact>('Contact');
    result.docs.forEach(item => {
      this.footerData.push({
        ...item.data(),
        documentId: item.id
      })
    });
    const langs: ('vi'|'en')[] = ['en', 'vi'];
    langs.forEach(lang =>{
      const data = this.footerData.find(item => item.lang === lang);
      if(data){
        this.formFooter[lang].setValue({
          content: data.content,
          id: data.documentId
        });
      }
    });
  }

  goBack() {
    this.location.back();
  }

  updateContactInfor(lang: 'vi'|'en'){
    const formValue = this.formFooter[lang].getRawValue();
    const request: IContact = {
      content: formValue.content,
      lang: lang
    };
    if(formValue.id){
      this.firebaseService.updateDoc<IContact>('Contact',formValue.id, request);
      return;
    }
    this.firebaseService.updateCollection<IContact>('Contact', request);
  }
}

import { IInfomation } from 'src/app/shared/models/information.model';
import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-edit-info',
  templateUrl: './create-edit-info.component.html',
  styleUrls: ['./create-edit-info.component.scss']
})
export class CreateEditInfoComponent implements OnInit {
  private informations: IInfomation[] = [];
  formInfomation !: {
    en: FormGroup,
    vi: FormGroup
  }
  constructor(
    private firebaseService: FirebaseService,
    private router: Router,
    private location: Location
  ) { }

  async ngOnInit(): Promise<void> {
    this._buildFormInformation();
  }

  private async _buildFormInformation() {
    const informationSnapshot = await this.firebaseService.getCollection<IInfomation>("Intro");
    this.informations = informationSnapshot.docs.map(item => ({
      ...item.data(),
      documentId: item.id
    } as IInfomation));
    const informationEn = this.informations.find(item => item.lang === 'en');
    const infomationVi = this.informations.find(item => item.lang === 'vi');
    this.formInfomation = {
      en: new FormGroup({
        name: new FormControl(informationEn?.name),
        email: new FormControl(informationEn?.email),
        profession: new FormControl(informationEn?.profession),
        facebook: new FormControl(informationEn?.facebook),
        linkedln: new FormControl(informationEn?.linkedln),
        twiter: new FormControl(informationEn?.twiter),
        github: new FormControl(informationEn?.github),
        description: new FormControl(informationEn?.description),
        bannerContent: new FormControl(informationEn?.bannerContent),
        skill: new FormControl(informationEn?.skill),
      }),
      vi: new FormGroup({
        name: new FormControl(infomationVi?.name),
        email: new FormControl(infomationVi?.email),
        profession: new FormControl(infomationVi?.profession),
        facebook: new FormControl(infomationVi?.facebook),
        linkedln: new FormControl(infomationVi?.linkedln),
        twiter: new FormControl(infomationVi?.twiter),
        github: new FormControl(infomationVi?.github),
        description: new FormControl(infomationVi?.description),
        bannerContent: new FormControl(infomationVi?.bannerContent),
        skill: new FormControl(infomationVi?.skill || []),
      })
    }
  }

  addSkill(lang: 'vi' | 'en', value: string) {
    if (!value)
      return;
    const currentValue = this.formInfomation[lang].get('skill')?.value as string[];
    currentValue.push(value);
    this.formInfomation[lang].get('skill')?.setValue(currentValue);
  }

  deleteSkill(lang: 'vi' | 'en', index: number) {
    const currentValue = this.formInfomation[lang].get('skill')?.value as string[];
    if (index > (currentValue.length - 1))
      return;
    currentValue.splice(index, 1);
  }

  updateInfomation(lang: 'vi' | 'en') {
    const { documentId } = this.informations.find(item => item.lang === lang) as IInfomation;
    if(!documentId)
      return;
    const formValue = this.formInfomation[lang].getRawValue() as IInfomation;
    formValue.lang = lang;
    this.firebaseService.updateDoc<IInfomation>('Intro',documentId,formValue);
  }

  goback(){
    this.location.back();
  }

}

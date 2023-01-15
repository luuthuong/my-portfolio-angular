import { IContact } from './../../shared/models/contact.model';
import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { GlobalService } from 'src/app/services/global.service';
import { BaseComponent } from 'src/app/shared/components/base-component.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent extends BaseComponent implements OnInit {
  contact !: IContact;
  constructor(
    private globalService: GlobalService
  ) { 
    super();

    this.globalService.$getContact
    .pipe(takeUntil(this.ngUnSubcribe))
    .subscribe(result =>{
      this.contact = result[0];
    })
  }

  ngOnInit(): void {
  }

}

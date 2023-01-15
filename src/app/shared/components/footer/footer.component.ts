import { IContact } from './../../models/contact.model';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { GlobalService } from 'src/app/services/global.service';
import { IInfomation } from 'src/app/shared/models/information.model';
import { BaseComponent } from './../base-component.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  animations: [
    trigger("animateFooter", [
      transition(":enter", [
        query("*", [
          style({ opacity: 0, transform: "translateY(100%)" }),
          stagger(150, [
            animate(
              "550ms cubic-bezier(0.35, 0, 0.25, 1)",
              style({ opacity: 1, transform: "none" })
            )
          ])
        ])
      ])
    ])
  ]
})
export class FooterComponent extends BaseComponent implements OnInit {
  information !: IInfomation;
  contact !: IContact
  constructor(
      private globalService: GlobalService
  ) { 
    super();
    this.globalService.$getInformation
    .pipe(takeUntil(this.ngUnSubcribe))
    .subscribe(result =>{
      this.information = result;
    });
  }

  ngOnInit(): void {
  }

  onClickLinkIcon(url: string){
    window.open(url,'_blank');
  }

}

import { IInfomation } from './../../shared/models/information.model';
import { takeUntil } from 'rxjs/operators';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { AnalyticsService } from 'src/app/services/analytics.service';
import { BaseComponent } from 'src/app/shared/components/base-component.component';
import { GlobalService } from 'src/app/services/global.service';
export interface Item { name: string; }
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  animations: [
    trigger('bannerTrigger', [
      transition(":enter", [
        query("*", [
          style({ opacity: 0, transform: "translateX(-50px)" }),
          stagger(50, [
            animate(
              "250ms cubic-bezier(0.35, 0, 0.25, 1)",
              style({ opacity: 1, transform: "none" })
            )
          ])
        ])
      ])
    ])
  ]
})
export class BannerComponent extends BaseComponent implements OnInit {
  information !: IInfomation
  constructor(
    private globalService: GlobalService
  ) {
    super();
  }

  ngOnInit(): void {
    this.globalService.$getInformation
    .pipe(takeUntil(this.ngUnSubcribe))
    .subscribe(result =>{
      this.information = result;
    });
  }

  onClick($event: any){
  }

}

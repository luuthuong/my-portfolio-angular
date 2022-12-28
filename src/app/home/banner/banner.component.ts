import { takeUntil } from 'rxjs/operators';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { AnalyticsService } from 'src/app/services/analytics.service';
import { BaseComponentComponent } from 'src/app/shared/components/base-component.component';
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
export class BannerComponent extends BaseComponentComponent implements OnInit {
  private itemDocs !: AngularFirestoreDocument<Item>;
  constructor(
    private fireStore : AngularFirestore
  ) {
    super();
    this.itemDocs = this.fireStore.doc<Item>('Intro/1');
    this.itemDocs.valueChanges()
    .pipe(takeUntil(this.ngUnSubcribe))
    .subscribe(response =>{
    })
  }

  ngOnInit(): void {
  }

  onClick($event: any){
  }

}

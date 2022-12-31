import { takeUntil } from 'rxjs/operators';
import { IInfomation } from 'src/app/shared/models/information.model';
import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/shared/components/base-component.component';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent extends BaseComponent implements OnInit {
  information !: IInfomation;
  constructor(
    private globalService: GlobalService
  ) {
    super();
    this.globalService.$getInformation
    .pipe(takeUntil(this.ngUnSubcribe))
    .subscribe(result => {
      this.information = result;
    })
  }


  ngOnInit(): void {
  }

}

import { takeUntil } from 'rxjs/operators';
import { FirebaseService } from './../../services/firebase.service';
import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/shared/components/base-component.component';
import { IInfomation } from 'src/app/shared/models/information.model';
import { GlobalService } from 'src/app/services/global.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends BaseComponent implements OnInit {
  isLoading: boolean = true;
  information!: IInfomation;
  constructor(

  ) { 
    super();
  }

  ngOnInit(): void {
    
  }

}

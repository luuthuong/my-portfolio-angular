import { finalize, switchMap, takeUntil } from 'rxjs/operators';
import { LanguageService } from 'src/app/services/language.service';
import { Injectable } from '@angular/core';
import { AngularFirestore, CollectionReference, Query } from '@angular/fire/compat/firestore';
import { IInfomation } from '../shared/models/information.model';
import { NgxSpinnerService } from 'ngx-spinner';
import { of } from 'rxjs';
import { IExperience } from '../shared/models/experience.model';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    private afs: AngularFirestore,
    private languageService: LanguageService,
    private spinner: NgxSpinnerService
  ) { }

  private _information(){
    this.spinner.show();
    return this.afs.collection<IInfomation>("Intro", ref => {
      let query: CollectionReference | Query = ref;
      query = query.where('lang', '==', this.languageService.lang).where('type', '==', 0);
      return query;
    });
  }

  private _experience(){
    this.spinner.show();
    return this.afs.collection<IExperience>("Experience", ref =>{
      let query: CollectionReference | Query = ref;
      query = query.where('lang', '==', this.languageService.lang);
      return query;
    })
  }

  getInformation() {
    return this._information().get().pipe(switchMap((value, _) => {
      this.spinner.hide();
      return of(value);
    })).toPromise();
  }

  getExperience(){
    return this._experience().valueChanges().pipe(switchMap((value,_)=>{
      this.spinner.hide();
      return of(value);
    }));
  }

  stopLoading(){
    this.spinner.hide();
  }
}

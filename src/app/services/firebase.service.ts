import { IProject } from './../shared/models/project.model';
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

  private _information(lang: "vi" | "en"){
    this.spinner.show();
    return this.afs.collection<IInfomation>("Intro", ref => {
      let query: CollectionReference | Query = ref;
      query = query.where('lang', '==', lang).where('type', '==', 0);
      return query;
    });
  }

  private _experience(lang: "vi" | "en"){
    this.spinner.show();
    return this.afs.collection<IExperience>("Experience", ref =>{
      let query: CollectionReference | Query = ref;
      query = query.where('lang', '==', lang);
      return query;
    })
  }

  private _project(lang: "vi" | "en"){
    this.spinner.show();
    return this.afs.collection<IProject>("Project", ref =>{
      let query: CollectionReference | Query = ref;
      query = query.where('lang', '==', lang);
      return query;
    })
  }

  getCollection<T>(path: string){
    this.spinner.show();
    return this.afs.collection<T>(path).get().pipe(switchMap((value, index)=>{
      this.spinner.hide();
      return of(value);
    })).toPromise();
  }

  getInformation(lang: 'vi'|'en' = this.languageService.lang) {
    return this._information(lang).get().pipe(switchMap((value, _) => {
      this.spinner.hide();
      return of(value);
    })).toPromise();
  }

  getExperience(lang: 'vi'|'en' = this.languageService.lang ){
    return this._experience(lang).get().pipe(switchMap((value,_)=>{
      this.spinner.hide();
      return of(value);
    })).toPromise();
  }


  getProject(lang: 'vi'|'en' = this.languageService.lang ){
    return this._project(lang).get().pipe(switchMap((value, _)=>{
      this.spinner.hide();
      return of(value);
    })).toPromise();
  }

  stopLoading(){
    this.spinner.hide();
  }

  updateCollection<T>(path: string, data : T){
    const collection = this.afs.collection<T>(path);
    collection.add(data);  
  }

  updateDoc<T>(collection: string,docId: string, data:T){
    const collect = this.afs.collection<T>(collection);
    collect.doc(docId).update(data);
  }

   async deleteDocument(collection: string, docId: string){
    const collect = this.afs.collection(collection);
    await collect.doc(docId).delete();
  }
}

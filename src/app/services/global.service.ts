import { FirebaseService } from './firebase.service';
import { IExperience } from './../shared/models/experience.model';
import { IInfomation } from './../shared/models/information.model';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  $getInformation = new Subject<IInfomation>();
  $getExperience = new Subject<IExperience>();
  constructor(
    private firebaseService: FirebaseService
  ) { }
  async updateInformation(){
    const informationResponse = await this.firebaseService.getInformation();
    this.$getInformation.next(informationResponse.docs[0].data());
  }

  updateExperience(data: IExperience){
    this.$getExperience.next(data);
  }
}

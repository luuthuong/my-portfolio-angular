import { IContact } from './../shared/models/contact.model';
import { IProject } from './../shared/models/project.model';
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
  $getExperience = new Subject<IExperience[]>();
  $getProject = new Subject<IProject[]>();
  $getContact = new Subject<IContact[]>();

  constructor(
    private firebaseService: FirebaseService
  ) { }
  async updateInformation(){
    const informationResponse = await this.firebaseService.getInformation();
    this.$getInformation.next({
      ...informationResponse.docs[0].data(),
      documentId : informationResponse.docs[0].id
    });
  }

  async updateExperience(){
    const experienceResponse = await this.firebaseService.getExperience();
    const experiences = experienceResponse.docs.map(item => ({
      ...item.data(),
      documentId: item.id
    }));
    this.$getExperience.next(experiences)
  }

  async updateProject(){
    const projectResponse = await this.firebaseService.getProject();
    const projects = projectResponse.docs.map(item =>{
      return {
        ...item.data(),
        documentId: item.id
      } as IProject;
    });
    this.$getProject.next(projects);
  }

  async updateContact(){
    const contactResponse  = await this.firebaseService.getContact();
    const contacts = contactResponse.docs.map(item =>({
      ...item.data(),
      documentId: item.id
    } as IContact));
    this.$getContact.next(contacts);
  }
}

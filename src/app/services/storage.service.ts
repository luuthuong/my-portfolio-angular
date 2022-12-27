import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(

  ) { }
  public static setItem(key: string, value: string) {
    localStorage.setItem(key, value);
  }
  public static getItem(key: string){
    return localStorage.getItem(key);
  }
  public static removeItem(key: string){
    localStorage.removeItem(key);
  }
}

import { Injectable } from '@angular/core';
import { GoogleAnalyticsService } from 'ngx-google-analytics';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor(
    private $gaService: GoogleAnalyticsService
  ) { }

  sendAnalyticEvent(action: string, category: string, label: string, callback: void){
    this.$gaService.event(action, category, label);
    callback;
  }

  sendAnalyticPageView(path: string, title: string){
    this.$gaService.pageView(path, title);
  }

}

import { AppInjector } from './../../services/app-injector.service';
import { Component, Injectable, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { AnalyticsService } from 'src/app/services/analytics.service';

@Injectable()
export class BaseComponent implements OnDestroy {
  ngUnSubcribe = new Subject<void>();
  analyticsService: AnalyticsService;
  constructor() { 
    this.analyticsService = AppInjector.getService(AnalyticsService);
  }
  ngOnDestroy(): void {
    this.ngUnSubcribe.next();
    this.ngUnSubcribe.complete();
  }
}

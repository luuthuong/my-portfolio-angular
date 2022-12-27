import { Component, Injectable, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class BaseComponentComponent implements OnDestroy {
  ngUnSubcribe = new Subject<void>();
  constructor() { }
  ngOnDestroy(): void {
    this.ngUnSubcribe.next();
    this.ngUnSubcribe.complete();
  }
}

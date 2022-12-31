import { Component, OnInit } from '@angular/core';
import { SlideAnimation } from 'src/app/shared/animations/slide.animation';
import { BaseComponent } from 'src/app/shared/components/base-component.component';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
  animations:[
    SlideAnimation
  ]
})
export class JobsComponent extends BaseComponent implements OnInit {
  active = 0
  constructor() { 
    super();
  }
  ngOnInit(): void {
  }
}

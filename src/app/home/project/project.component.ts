import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { BaseComponentComponent } from 'src/app/shared/components/base-component.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent extends BaseComponentComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    navSpeed: 1000,
    items: 1,
    autoplay: true,
    autoplayTimeout:5000
  }
  @ViewChild('imgContainer') imgContainer!: ElementRef;
  constructor() { 
    super();
  }

  ngOnInit(): void {
  }

  debug(){
    if(!this.imgContainer) return;
    this.imgContainer.nativeElement.scroll({
      top: this.imgContainer.nativeElement.scrollHeight,
      left: 0,
      behavior: 'smooth',    
    });
  }

}

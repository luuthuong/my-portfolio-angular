import { takeUntil } from 'rxjs/operators';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { GlobalService } from 'src/app/services/global.service';
import { BaseComponent } from 'src/app/shared/components/base-component.component';
import { IProject } from './../../shared/models/project.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent extends BaseComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    navSpeed: 1000,
    items: 1,
    autoplay: true,
    autoplayTimeout:5000
  };
  projects : IProject[] = [];

  @ViewChild('imgContainer') imgContainer!: ElementRef;
  constructor(
    private globalService: GlobalService
  ) { 
    super();
  }

  ngOnInit(): void {
    this.globalService.$getProject
      .pipe(takeUntil(this.ngUnSubcribe))
      .subscribe(result =>{
        this.projects = result;
      });
    
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

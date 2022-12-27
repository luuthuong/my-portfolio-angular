import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { JobsComponent } from './jobs/jobs.component';
import { BannerComponent } from './banner/banner.component';
import { ProjectComponent } from './project/project.component';
import { MoreProjectComponent } from './more-project/more-project.component';
import { ContactComponent } from './contact/contact.component';
import { SharedCommonModule } from '../shared/shared-common.module';
import { TranslateModule } from '@ngx-translate/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    JobsComponent,
    BannerComponent,
    ProjectComponent,
    MoreProjectComponent,
    ContactComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedCommonModule,
    TranslateModule,
    CarouselModule,
    NgbNavModule
  ]
})
export class HomeModule { }

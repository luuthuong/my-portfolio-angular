import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NgbDropdownModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from './material.module';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    NgbNavModule,
    NgbDropdownModule,
    RouterModule,
    MaterialModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    MaterialModule
  ],
  providers: [
    TranslateService
  ]
})
export class SharedCommonModule { }

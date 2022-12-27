import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NgbDropdownModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from './material.module';
import { ButtonCustomComponent } from './components/button-custom/button-custom.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ButtonCustomComponent
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
    MaterialModule,
    ButtonCustomComponent
  ],
  providers: [
    TranslateService
  ]
})
export class SharedCommonModule { }

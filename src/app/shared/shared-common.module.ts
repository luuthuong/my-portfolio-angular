import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    NgbNavModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent
  ],
  providers: [
    TranslateService
  ]
})
export class SharedCommonModule { }

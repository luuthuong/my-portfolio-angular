import { CardItemComponent } from './components/card-item/card-item.component';
import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NgbDropdownModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from './material.module';
import { ButtonCustomComponent } from './components/button-custom/button-custom.component';
import { ComfirmDialogComponent } from './components/comfirm-dialog/comfirm-dialog.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ButtonCustomComponent,
    CardItemComponent,
    ComfirmDialogComponent
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
    ButtonCustomComponent,
    CardItemComponent,
    ComfirmDialogComponent
  ],
  providers: [
    TranslateService
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SharedCommonModule { }

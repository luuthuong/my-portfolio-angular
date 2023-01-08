import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { SharedCommonModule } from '../shared/shared-common.module';
import { AdminRoutingModule } from './admin-routing.module';
import { CreateEditProjectComponent } from './create-edit-project/create-edit-project.component';
import { CreateEditInfoComponent } from './create-edit-info/create-edit-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { GridViewComponent } from './grid-view/grid-view.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AdminComponent,
    CreateEditProjectComponent,
    CreateEditInfoComponent,
    GridViewComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SharedCommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbAlertModule
  ]
})
export class AdminModule { }

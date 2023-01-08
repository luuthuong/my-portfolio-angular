import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CreateEditProjectComponent } from './create-edit-project/create-edit-project.component';
import { CreateEditInfoComponent } from './create-edit-info/create-edit-info.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
    {
        path: '',
        component: AdminComponent
    },
    {
        path: 'project',
        component: CreateEditProjectComponent
    },
    {
        path: 'info',
        component: CreateEditInfoComponent
    },
    {
        path: 'footer',
        component: FooterComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }

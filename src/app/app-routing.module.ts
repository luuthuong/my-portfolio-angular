import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: ()=> import('src/app/home/home.module').then(m => m.HomeModule)
  },
  {
    path:'admin',
    loadChildren: () => import('src/app/admin/admin.module').then(m => m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

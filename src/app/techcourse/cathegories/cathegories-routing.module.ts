import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CathegoriesPage } from './cathegories.page';

const routes: Routes = [
  {
    path: '',
    component: CathegoriesPage
  },
  {
    path: ':categoryId',
    loadChildren: () => import('./cathegory-detail/cathegory-detail.module').then( m => m.CathegoryDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CathegoriesPageRoutingModule {}

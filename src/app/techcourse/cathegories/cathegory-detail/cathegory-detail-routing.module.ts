import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CathegoryDetailPage } from './cathegory-detail.page';

const routes: Routes = [
  {
    path: '',
    component: CathegoryDetailPage
  },
  {
    path: ':courseId',
    loadChildren: () => import('./course-detail/course-detail.module').then( m => m.CourseDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CathegoryDetailPageRoutingModule {}

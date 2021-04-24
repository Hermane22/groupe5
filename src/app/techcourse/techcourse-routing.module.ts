import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TechcoursePage } from './techcourse.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TechcoursePage,
    children:[
      {
        path: 'cathegories',
    loadChildren: () => import('./cathegories/cathegories.module').then( m => m.CathegoriesPageModule)
      },
      {
        path:'',
        redirectTo:'/techcourse/tabs/cathegories',
        pathMatch: 'full'
      },
      {
    path: 'notes',
    loadChildren: () => import('./notes/notes.module').then( m => m.NotesPageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: '/techcourse/tabs/cathegories',
    pathMatch: 'full'
  },
  {
    path: 'notes',
    loadChildren: () => import('./notes/notes.module').then( m => m.NotesPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TechcoursePageRoutingModule {}

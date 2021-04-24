import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotesPage } from './notes.page';

const routes: Routes = [
  {
    path: '',
    component: NotesPage
  },
  {
    path: 'new-note',
    loadChildren: () => import('./new-note/new-note.module').then( m => m.NewNotePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotesPageRoutingModule {}

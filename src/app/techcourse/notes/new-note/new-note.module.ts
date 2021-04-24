import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewNotePageRoutingModule } from './new-note-routing.module';

import { NewNotePage } from './new-note.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewNotePageRoutingModule,
    FormGroup,
    ReactiveFormsModule
  ],
  declarations: [NewNotePage]
})
export class NewNotePageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CathegoriesPageRoutingModule } from './cathegories-routing.module';

import { CathegoriesPage } from './cathegories.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CathegoriesPageRoutingModule
  ],
  declarations: [CathegoriesPage]
})
export class CathegoriesPageModule {}

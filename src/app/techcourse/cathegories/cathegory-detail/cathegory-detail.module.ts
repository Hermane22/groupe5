import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CathegoryDetailPageRoutingModule } from './cathegory-detail-routing.module';

import { CathegoryDetailPage } from './cathegory-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CathegoryDetailPageRoutingModule
  ],
  declarations: [CathegoryDetailPage]
})
export class CathegoryDetailPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DataMesPageRoutingModule } from './data-mes-routing.module';

import { DataMesPage } from './data-mes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DataMesPageRoutingModule
  ],
  declarations: [DataMesPage]
})
export class DataMesPageModule {}

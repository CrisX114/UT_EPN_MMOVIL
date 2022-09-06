import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataMesPage } from './data-mes.page';

const routes: Routes = [
  {
    path: '',
    component: DataMesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataMesPageRoutingModule {}

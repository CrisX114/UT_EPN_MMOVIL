import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditUserRoutingModule } from './edit-user-routing.module';
import { EditUserComponent } from './edit-user.component';

@NgModule({
  declarations: [EditUserComponent],
  imports: [CommonModule, EditUserRoutingModule, ReactiveFormsModule],
})
export class EditUserModule {}

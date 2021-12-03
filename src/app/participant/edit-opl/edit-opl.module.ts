import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditOplRoutingModule } from './edit-opl-routing.module';
import { EditOplComponent } from './edit-opl.component';


@NgModule({
  declarations: [
    EditOplComponent
  ],
  imports: [
    CommonModule,
    EditOplRoutingModule
  ]
})
export class EditOplModule { }

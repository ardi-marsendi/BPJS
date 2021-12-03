import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditTugasPgRoutingModule } from './edit-tugas-pg-routing.module';
import { EditTugasPgComponent } from './edit-tugas-pg.component';


@NgModule({
  declarations: [
    EditTugasPgComponent
  ],
  imports: [
    CommonModule,
    EditTugasPgRoutingModule
  ]
})
export class EditTugasPgModule { }

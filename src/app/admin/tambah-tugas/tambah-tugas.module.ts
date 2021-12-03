import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TambahTugasRoutingModule } from './tambah-tugas-routing.module';
import { TambahTugasComponent } from './tambah-tugas.component';


@NgModule({
  declarations: [
    TambahTugasComponent
  ],
  imports: [
    CommonModule,
    TambahTugasRoutingModule
  ]
})
export class TambahTugasModule { }

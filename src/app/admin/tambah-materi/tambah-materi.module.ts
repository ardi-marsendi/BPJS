import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TambahMateriRoutingModule } from './tambah-materi-routing.module';
import { TambahMateriComponent } from './tambah-materi.component';


@NgModule({
  declarations: [
    TambahMateriComponent
  ],
  imports: [
    CommonModule,
    TambahMateriRoutingModule
  ]
})
export class TambahMateriModule { }

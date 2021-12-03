import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TambahEvaluasiRoutingModule } from './tambah-evaluasi-routing.module';
import { TambahEvaluasiComponent } from './tambah-evaluasi.component';


@NgModule({
  declarations: [
    TambahEvaluasiComponent
  ],
  imports: [
    CommonModule,
    TambahEvaluasiRoutingModule
  ]
})
export class TambahEvaluasiModule { }

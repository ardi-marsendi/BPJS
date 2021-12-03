import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvaluasiRoutingModule } from './evaluasi-routing.module';
import { EvaluasiComponent } from './evaluasi.component';


@NgModule({
  declarations: [
    EvaluasiComponent
  ],
  imports: [
    CommonModule,
    EvaluasiRoutingModule
  ]
})
export class EvaluasiModule { }

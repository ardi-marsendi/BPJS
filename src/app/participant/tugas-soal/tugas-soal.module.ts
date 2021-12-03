import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TugasSoalRoutingModule } from './tugas-soal-routing.module';
import { TugasSoalComponent } from './tugas-soal.component';


@NgModule({
  declarations: [
    TugasSoalComponent
  ],
  imports: [
    CommonModule,
    TugasSoalRoutingModule
  ]
})
export class TugasSoalModule { }

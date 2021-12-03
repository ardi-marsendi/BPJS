import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PenilaianRoutingModule } from './penilaian-routing.module';
import { PenilaianComponent } from './penilaian.component';


@NgModule({
  declarations: [
    PenilaianComponent
  ],
  imports: [
    CommonModule,
    PenilaianRoutingModule
  ]
})
export class PenilaianModule { }

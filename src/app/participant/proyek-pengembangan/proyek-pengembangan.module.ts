import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProyekPengembanganRoutingModule } from './proyek-pengembangan-routing.module';
import { ProyekPengembanganComponent } from './proyek-pengembangan.component';


@NgModule({
  declarations: [
    ProyekPengembanganComponent
  ],
  imports: [
    CommonModule,
    ProyekPengembanganRoutingModule
  ]
})
export class ProyekPengembanganModule { }

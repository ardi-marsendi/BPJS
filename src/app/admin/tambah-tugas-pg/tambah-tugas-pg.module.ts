import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TambahTugasPgRoutingModule } from './tambah-tugas-pg-routing.module';
import { TambahTugasPgComponent } from './tambah-tugas-pg.component';


@NgModule({
  declarations: [
    TambahTugasPgComponent
  ],
  imports: [
    CommonModule,
    TambahTugasPgRoutingModule
  ]
})
export class TambahTugasPgModule { }

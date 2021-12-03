import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TambahPaRoutingModule } from './tambah-pa-routing.module';
import { TambahPaComponent } from './tambah-pa.component';


@NgModule({
  declarations: [
    TambahPaComponent
  ],
  imports: [
    CommonModule,
    TambahPaRoutingModule
  ]
})
export class TambahPaModule { }

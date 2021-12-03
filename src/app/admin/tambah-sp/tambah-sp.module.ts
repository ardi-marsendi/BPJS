import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TambahSpRoutingModule } from './tambah-sp-routing.module';
import { TambahSpComponent } from './tambah-sp.component';


@NgModule({
  declarations: [
    TambahSpComponent
  ],
  imports: [
    CommonModule,
    TambahSpRoutingModule
  ]
})
export class TambahSpModule { }

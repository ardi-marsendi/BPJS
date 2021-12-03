import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TambahOplRoutingModule } from './tambah-opl-routing.module';
import { TambahOplComponent } from './tambah-opl.component';


@NgModule({
  declarations: [
    TambahOplComponent
  ],
  imports: [
    CommonModule,
    TambahOplRoutingModule
  ]
})
export class TambahOplModule { }

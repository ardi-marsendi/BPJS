import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TambahPpRoutingModule } from './tambah-pp-routing.module';
import { TambahPpComponent } from './tambah-pp.component';


@NgModule({
  declarations: [
    TambahPpComponent
  ],
  imports: [
    CommonModule,
    TambahPpRoutingModule
  ]
})
export class TambahPpModule { }

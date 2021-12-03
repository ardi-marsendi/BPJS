import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TambahKpRoutingModule } from './tambah-kp-routing.module';
import { TambahKpComponent } from './tambah-kp.component';


@NgModule({
  declarations: [
    TambahKpComponent
  ],
  imports: [
    CommonModule,
    TambahKpRoutingModule
  ]
})
export class TambahKpModule { }

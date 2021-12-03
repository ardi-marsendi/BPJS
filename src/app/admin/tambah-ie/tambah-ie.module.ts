import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TambahIeRoutingModule } from './tambah-ie-routing.module';
import { TambahIeComponent } from './tambah-ie.component';


@NgModule({
  declarations: [
    TambahIeComponent
  ],
  imports: [
    CommonModule,
    TambahIeRoutingModule
  ]
})
export class TambahIeModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TambahPbRoutingModule } from './tambah-pb-routing.module';
import { TambahPbComponent } from './tambah-pb.component';
import { NgSelect2Module } from 'ng-select2';


@NgModule({
  declarations: [
    TambahPbComponent
  ],
  imports: [
    CommonModule,
    TambahPbRoutingModule,
    NgSelect2Module
  ]
})
export class TambahPbModule { }

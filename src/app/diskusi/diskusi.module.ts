import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiskusiRoutingModule } from './diskusi-routing.module';
import { DiskusiComponent } from './diskusi.component';


@NgModule({
  declarations: [
    DiskusiComponent
  ],
  imports: [
    CommonModule,
    DiskusiRoutingModule
  ]
})
export class DiskusiModule { }

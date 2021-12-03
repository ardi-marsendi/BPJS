import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailOplRoutingModule } from './detail-opl-routing.module';
import { DetailOplComponent } from './detail-opl.component';


@NgModule({
  declarations: [
    DetailOplComponent
  ],
  imports: [
    CommonModule,
    DetailOplRoutingModule
  ]
})
export class DetailOplModule { }

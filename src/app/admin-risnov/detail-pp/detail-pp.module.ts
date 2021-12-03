import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailPpRoutingModule } from './detail-pp-routing.module';
import { DetailPpComponent } from './detail-pp.component';


@NgModule({
  declarations: [
    DetailPpComponent
  ],
  imports: [
    CommonModule,
    DetailPpRoutingModule
  ]
})
export class DetailPpModule { }

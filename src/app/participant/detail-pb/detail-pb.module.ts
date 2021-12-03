import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailPbRoutingModule } from './detail-pb-routing.module';
import { DetailPbComponent } from './detail-pb.component';


@NgModule({
  declarations: [
    DetailPbComponent
  ],
  imports: [
    CommonModule,
    DetailPbRoutingModule
  ]
})
export class DetailPbModule { }

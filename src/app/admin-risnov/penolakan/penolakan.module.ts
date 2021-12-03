import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PenolakanRoutingModule } from './penolakan-routing.module';
import { PenolakanComponent } from './penolakan.component';


@NgModule({
  declarations: [
    PenolakanComponent
  ],
  imports: [
    CommonModule,
    PenolakanRoutingModule
  ]
})
export class PenolakanModule { }

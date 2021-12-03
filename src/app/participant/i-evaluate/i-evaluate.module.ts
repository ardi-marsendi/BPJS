import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IEvaluateRoutingModule } from './i-evaluate-routing.module';
import { IEvaluateComponent } from './i-evaluate.component';


@NgModule({
  declarations: [
    IEvaluateComponent
  ],
  imports: [
    CommonModule,
    IEvaluateRoutingModule
  ]
})
export class IEvaluateModule { }

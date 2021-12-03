import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpRoutingModule } from './sp-routing.module';
import { SpComponent } from './sp.component';


@NgModule({
  declarations: [
    SpComponent
  ],
  imports: [
    CommonModule,
    SpRoutingModule
  ]
})
export class SpModule { }

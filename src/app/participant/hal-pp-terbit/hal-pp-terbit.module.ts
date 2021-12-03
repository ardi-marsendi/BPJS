import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HalPpTerbitRoutingModule } from './hal-pp-terbit-routing.module';
import { HalPpTerbitComponent } from './hal-pp-terbit.component';


@NgModule({
  declarations: [
    HalPpTerbitComponent
  ],
  imports: [
    CommonModule,
    HalPpTerbitRoutingModule
  ]
})
export class HalPpTerbitModule { }

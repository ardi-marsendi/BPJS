import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HalPaTerbitRoutingModule } from './hal-pa-terbit-routing.module';
import { HalPaTerbitComponent } from './hal-pa-terbit.component';


@NgModule({
  declarations: [
    HalPaTerbitComponent
  ],
  imports: [
    CommonModule,
    HalPaTerbitRoutingModule
  ]
})
export class HalPaTerbitModule { }

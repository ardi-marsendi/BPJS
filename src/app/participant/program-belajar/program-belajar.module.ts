import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgramBelajarRoutingModule } from './program-belajar-routing.module';
import { ProgramBelajarComponent } from './program-belajar.component';


@NgModule({
  declarations: [
    ProgramBelajarComponent
  ],
  imports: [
    CommonModule,
    ProgramBelajarRoutingModule
  ]
})
export class ProgramBelajarModule { }

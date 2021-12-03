import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgramAndalanRoutingModule } from './program-andalan-routing.module';
import { ProgramAndalanComponent } from './program-andalan.component';


@NgModule({
  declarations: [
    ProgramAndalanComponent
  ],
  imports: [
    CommonModule,
    ProgramAndalanRoutingModule
  ]
})
export class ProgramAndalanModule { }

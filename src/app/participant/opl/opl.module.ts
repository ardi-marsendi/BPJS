import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OplRoutingModule } from './opl-routing.module';
import { OplComponent } from './opl.component';


@NgModule({
  declarations: [
    OplComponent
  ],
  imports: [
    CommonModule,
    OplRoutingModule
  ]
})
export class OplModule { }

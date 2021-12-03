import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KpRoutingModule } from './kp-routing.module';
import { KpComponent } from './kp.component';


@NgModule({
  declarations: [
    KpComponent
  ],
  imports: [
    CommonModule,
    KpRoutingModule
  ]
})
export class KpModule { }

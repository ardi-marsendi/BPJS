import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonitorTugasRoutingModule } from './monitor-tugas-routing.module';
import { MonitorTugasComponent } from './monitor-tugas.component';


@NgModule({
  declarations: [
    MonitorTugasComponent
  ],
  imports: [
    CommonModule,
    MonitorTugasRoutingModule
  ]
})
export class MonitorTugasModule { }

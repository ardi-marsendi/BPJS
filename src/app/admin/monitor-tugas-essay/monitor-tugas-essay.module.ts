import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonitorTugasEssayRoutingModule } from './monitor-tugas-essay-routing.module';
import { MonitorTugasEssayComponent } from './monitor-tugas-essay.component';


@NgModule({
  declarations: [
    MonitorTugasEssayComponent
  ],
  imports: [
    CommonModule,
    MonitorTugasEssayRoutingModule
  ]
})
export class MonitorTugasEssayModule { }

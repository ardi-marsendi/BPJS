import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonitorTugasComponent } from './monitor-tugas.component';

const routes: Routes = [{ path: '', component: MonitorTugasComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MonitorTugasRoutingModule { }

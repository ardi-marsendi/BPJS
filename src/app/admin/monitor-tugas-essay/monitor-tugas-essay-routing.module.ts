import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonitorTugasEssayComponent } from './monitor-tugas-essay.component';

const routes: Routes = [{ path: '', component: MonitorTugasEssayComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MonitorTugasEssayRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgramBelajarComponent } from './program-belajar.component';

const routes: Routes = [{ path: '', component: ProgramBelajarComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramBelajarRoutingModule { }

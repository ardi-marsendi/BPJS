import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvaluasiComponent } from './evaluasi.component';

const routes: Routes = [{ path: '', component: EvaluasiComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvaluasiRoutingModule { }

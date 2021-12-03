import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TugasSoalComponent } from './tugas-soal.component';

const routes: Routes = [{ path: '', component: TugasSoalComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TugasSoalRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TambahEvaluasiComponent } from './tambah-evaluasi.component';

const routes: Routes = [{ path: '', component: TambahEvaluasiComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TambahEvaluasiRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TambahTugasPgComponent } from './tambah-tugas-pg.component';

const routes: Routes = [{ path: '', component: TambahTugasPgComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TambahTugasPgRoutingModule { }

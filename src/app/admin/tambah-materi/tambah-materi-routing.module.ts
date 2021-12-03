import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TambahMateriComponent } from './tambah-materi.component';

const routes: Routes = [{ path: '', component: TambahMateriComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TambahMateriRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TambahTugasComponent } from './tambah-tugas.component';

const routes: Routes = [{ path: '', component: TambahTugasComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TambahTugasRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TambahPaComponent } from './tambah-pa.component';

const routes: Routes = [{ path: '', component: TambahPaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TambahPaRoutingModule { }

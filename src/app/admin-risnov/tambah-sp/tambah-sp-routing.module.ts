import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TambahSpComponent } from './tambah-sp.component';

const routes: Routes = [{ path: '', component: TambahSpComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TambahSpRoutingModule { }

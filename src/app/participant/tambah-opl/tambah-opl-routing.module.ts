import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TambahOplComponent } from './tambah-opl.component';

const routes: Routes = [{ path: '', component: TambahOplComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TambahOplRoutingModule { }

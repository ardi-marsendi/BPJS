import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TambahPpComponent } from './tambah-pp.component';

const routes: Routes = [{ path: '', component: TambahPpComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TambahPpRoutingModule { }

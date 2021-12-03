import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TambahPbComponent } from './tambah-pb.component';

const routes: Routes = [{ path: '', component: TambahPbComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TambahPbRoutingModule { }

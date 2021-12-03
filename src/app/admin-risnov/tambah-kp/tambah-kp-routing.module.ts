import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TambahKpComponent } from './tambah-kp.component';

const routes: Routes = [{ path: '', component: TambahKpComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TambahKpRoutingModule { }

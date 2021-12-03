import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailOplComponent } from './detail-opl.component';

const routes: Routes = [{ path: '', component: DetailOplComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailOplRoutingModule { }

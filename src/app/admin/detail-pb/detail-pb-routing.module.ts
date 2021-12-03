import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPbComponent } from './detail-pb.component';

const routes: Routes = [{ path: '', component: DetailPbComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailPbRoutingModule { }

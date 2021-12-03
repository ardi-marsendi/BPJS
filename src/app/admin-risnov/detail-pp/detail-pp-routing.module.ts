import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPpComponent } from './detail-pp.component';

const routes: Routes = [{ path: '', component: DetailPpComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailPpRoutingModule { }

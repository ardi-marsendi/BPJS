import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPaComponent } from './detail-pa.component';

const routes: Routes = [{ path: '', component: DetailPaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailPaRoutingModule { }

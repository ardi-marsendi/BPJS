import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailIeComponent } from './detail-ie.component';

const routes: Routes = [{ path: '', component: DetailIeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailIeRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PenolakanComponent } from './penolakan.component';

const routes: Routes = [{ path: '', component: PenolakanComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PenolakanRoutingModule { }

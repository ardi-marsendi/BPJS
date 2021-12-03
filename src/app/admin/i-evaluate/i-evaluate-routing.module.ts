import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IEvaluateComponent } from './i-evaluate.component';

const routes: Routes = [{ path: '', component: IEvaluateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IEvaluateRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HalPpTerbitComponent } from './hal-pp-terbit.component';

const routes: Routes = [{ path: '', component: HalPpTerbitComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HalPpTerbitRoutingModule { }

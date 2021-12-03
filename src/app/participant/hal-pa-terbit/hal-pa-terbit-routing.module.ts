import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HalPaTerbitComponent } from './hal-pa-terbit.component';

const routes: Routes = [{ path: '', component: HalPaTerbitComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HalPaTerbitRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OplComponent } from './opl.component';

const routes: Routes = [{ path: '', component: OplComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OplRoutingModule { }

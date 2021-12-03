import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiskusiComponent } from './diskusi.component';

const routes: Routes = [{ path: '', component: DiskusiComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiskusiRoutingModule { }

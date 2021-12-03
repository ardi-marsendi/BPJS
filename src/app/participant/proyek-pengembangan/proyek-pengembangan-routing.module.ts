import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProyekPengembanganComponent } from './proyek-pengembangan.component';

const routes: Routes = [{ path: '', component: ProyekPengembanganComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProyekPengembanganRoutingModule { }

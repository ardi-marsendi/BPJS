import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MateriComponent } from './materi.component';

const routes: Routes = [{ path: '', component: MateriComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MateriRoutingModule { }

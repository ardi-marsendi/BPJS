import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditTugasPgComponent } from './edit-tugas-pg.component';

const routes: Routes = [{ path: '', component: EditTugasPgComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditTugasPgRoutingModule { }

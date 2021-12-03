import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TambahTugasEssayComponent } from './tambah-tugas-essay.component';

const routes: Routes = [{ path: '', component: TambahTugasEssayComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TambahTugasEssayRoutingModule { }

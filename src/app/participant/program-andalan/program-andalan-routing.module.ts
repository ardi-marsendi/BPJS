import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgramAndalanComponent } from './program-andalan.component';

const routes: Routes = [{ path: '', component: ProgramAndalanComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramAndalanRoutingModule { }

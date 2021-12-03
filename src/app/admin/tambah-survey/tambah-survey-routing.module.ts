import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TambahSurveyComponent } from './tambah-survey.component';

const routes: Routes = [{ path: '', component: TambahSurveyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TambahSurveyRoutingModule { }

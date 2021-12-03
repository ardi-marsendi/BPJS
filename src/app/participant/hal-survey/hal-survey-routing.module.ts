import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HalSurveyComponent } from './hal-survey.component';

const routes: Routes = [{ path: '', component: HalSurveyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HalSurveyRoutingModule { }

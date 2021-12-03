import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HalSurveyRoutingModule } from './hal-survey-routing.module';
import { HalSurveyComponent } from './hal-survey.component';


@NgModule({
  declarations: [
    HalSurveyComponent
  ],
  imports: [
    CommonModule,
    HalSurveyRoutingModule
  ]
})
export class HalSurveyModule { }

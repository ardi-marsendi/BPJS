import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TambahSurveyRoutingModule } from './tambah-survey-routing.module';
import { TambahSurveyComponent } from './tambah-survey.component';


@NgModule({
  declarations: [
    TambahSurveyComponent
  ],
  imports: [
    CommonModule,
    TambahSurveyRoutingModule
  ]
})
export class TambahSurveyModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditTugasEssayRoutingModule } from './edit-tugas-essay-routing.module';
import { EditTugasEssayComponent } from './edit-tugas-essay.component';


@NgModule({
  declarations: [
    EditTugasEssayComponent
  ],
  imports: [
    CommonModule,
    EditTugasEssayRoutingModule
  ]
})
export class EditTugasEssayModule { }

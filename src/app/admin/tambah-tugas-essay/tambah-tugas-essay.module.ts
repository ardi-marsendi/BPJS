import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TambahTugasEssayRoutingModule } from './tambah-tugas-essay-routing.module';
import { TambahTugasEssayComponent } from './tambah-tugas-essay.component';


@NgModule({
  declarations: [
    TambahTugasEssayComponent
  ],
  imports: [
    CommonModule,
    TambahTugasEssayRoutingModule
  ]
})
export class TambahTugasEssayModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditPpRoutingModule } from './edit-pp-routing.module';
import { EditPpComponent } from './edit-pp.component';


@NgModule({
  declarations: [
    EditPpComponent
  ],
  imports: [
    CommonModule,
    EditPpRoutingModule
  ]
})
export class EditPpModule { }

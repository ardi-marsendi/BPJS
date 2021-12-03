import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditPbRoutingModule } from './edit-pb-routing.module';
import { EditPbComponent } from './edit-pb.component';


@NgModule({
  declarations: [
    EditPbComponent
  ],
  imports: [
    CommonModule,
    EditPbRoutingModule
  ]
})
export class EditPbModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditSpRoutingModule } from './edit-sp-routing.module';
import { EditSpComponent } from './edit-sp.component';


@NgModule({
  declarations: [
    EditSpComponent
  ],
  imports: [
    CommonModule,
    EditSpRoutingModule
  ]
})
export class EditSpModule { }

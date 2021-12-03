import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditIeRoutingModule } from './edit-ie-routing.module';
import { EditIeComponent } from './edit-ie.component';


@NgModule({
  declarations: [
    EditIeComponent
  ],
  imports: [
    CommonModule,
    EditIeRoutingModule
  ]
})
export class EditIeModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditKpRoutingModule } from './edit-kp-routing.module';
import { EditKpComponent } from './edit-kp.component';


@NgModule({
  declarations: [
    EditKpComponent
  ],
  imports: [
    CommonModule,
    EditKpRoutingModule
  ]
})
export class EditKpModule { }

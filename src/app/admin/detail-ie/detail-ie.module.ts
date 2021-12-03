import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailIeRoutingModule } from './detail-ie-routing.module';
import { DetailIeComponent } from './detail-ie.component';


@NgModule({
  declarations: [
    DetailIeComponent
  ],
  imports: [
    CommonModule,
    DetailIeRoutingModule
  ]
})
export class DetailIeModule { }

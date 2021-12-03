import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailPaRoutingModule } from './detail-pa-routing.module';
import { DetailPaComponent } from './detail-pa.component';

@NgModule({
  declarations: [
    DetailPaComponent
  ],
  imports: [
    CommonModule,
    DetailPaRoutingModule,
    
  ]
})
export class DetailPaModule { }

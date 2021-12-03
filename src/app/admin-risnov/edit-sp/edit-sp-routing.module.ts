import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditSpComponent } from './edit-sp.component';

const routes: Routes = [{ path: '', component: EditSpComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditSpRoutingModule { }

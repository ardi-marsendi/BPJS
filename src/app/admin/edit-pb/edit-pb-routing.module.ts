import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditPbComponent } from './edit-pb.component';

const routes: Routes = [{ path: '', component: EditPbComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditPbRoutingModule { }

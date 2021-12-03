import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditPpComponent } from './edit-pp.component';

const routes: Routes = [{ path: '', component: EditPpComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditPpRoutingModule { }

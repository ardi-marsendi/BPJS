import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditIeComponent } from './edit-ie.component';

const routes: Routes = [{ path: '', component: EditIeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditIeRoutingModule { }

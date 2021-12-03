import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditKpComponent } from './edit-kp.component';

const routes: Routes = [{ path: '', component: EditKpComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditKpRoutingModule { }

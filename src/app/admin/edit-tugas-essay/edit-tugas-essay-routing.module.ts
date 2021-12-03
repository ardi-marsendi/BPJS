import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditTugasEssayComponent } from './edit-tugas-essay.component';

const routes: Routes = [{ path: '', component: EditTugasEssayComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditTugasEssayRoutingModule { }

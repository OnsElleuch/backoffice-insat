import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLabComponent } from './add-lab/add-lab.component';

const routes: Routes = [
  {
    path: 'add-lab',
    component: AddLabComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaboratoireRoutingModule { }

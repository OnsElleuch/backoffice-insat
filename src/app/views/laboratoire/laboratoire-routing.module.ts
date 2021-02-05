import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLabComponent } from './add-lab/add-lab.component';
import { LabosListComponent } from './labos-list/labos-list.component';

const routes: Routes = [
  {
    path: 'add-lab',
    component: AddLabComponent
  },
  {
    path: 'lab-list',
    component: LabosListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaboratoireRoutingModule { }

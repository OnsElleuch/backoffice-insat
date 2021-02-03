import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEnseignantComponent } from './add-enseignant/add-enseignant.component';

const routes: Routes = [
  {
    path: 'add-enseignant',
    component: AddEnseignantComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnseignantRoutingModule { }

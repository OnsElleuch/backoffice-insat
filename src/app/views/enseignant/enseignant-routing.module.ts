import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEnseignantComponent } from './add-enseignant/add-enseignant.component';
import { EnseignantsListComponent } from './enseignants-list/enseignants-list.component';

const routes: Routes = [
  {
    path: 'add-enseignant',
    component: AddEnseignantComponent
  },
  {
    path: 'enseignants-list',
    component: EnseignantsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnseignantRoutingModule { }

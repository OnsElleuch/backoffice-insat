import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRendezVousComponent } from './add-rendez-vous/add-rendez-vous.component';
import { RendezVousListComponent } from './rendez-vous-list/rendez-vous-list.component';

const routes: Routes = [
  {
    path: 'add-rendez-vous',
    component: AddRendezVousComponent
  },
  {
    path: 'rendez-vous-list',
    component: RendezVousListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RendezVousRoutingModule { }

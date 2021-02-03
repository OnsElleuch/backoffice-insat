import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRendezVousComponent } from './add-rendez-vous/add-rendez-vous.component';

const routes: Routes = [
  {
    path: 'add-rendez-vous',
    component: AddRendezVousComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RendezVousRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RendezVousRoutingModule } from './rendez-vous-routing.module';
import { AddRendezVousComponent } from './add-rendez-vous/add-rendez-vous.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AddRendezVousComponent],
  imports: [
    CommonModule,
    RendezVousRoutingModule,
    FormsModule
  ]
})
export class RendezVousModule { }

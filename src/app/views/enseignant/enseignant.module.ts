import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnseignantRoutingModule } from './enseignant-routing.module';
import { AddEnseignantComponent } from './add-enseignant/add-enseignant.component';
import { FormsModule } from '@angular/forms';
import { EnseignantsListComponent } from './enseignants-list/enseignants-list.component';


@NgModule({
  declarations: [AddEnseignantComponent, EnseignantsListComponent],
  imports: [
    CommonModule,
    EnseignantRoutingModule,
    FormsModule
  ]
})
export class EnseignantModule { }

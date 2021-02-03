import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnseignantRoutingModule } from './enseignant-routing.module';
import { AddEnseignantComponent } from './add-enseignant/add-enseignant.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AddEnseignantComponent],
  imports: [
    CommonModule,
    EnseignantRoutingModule,
    FormsModule
  ]
})
export class EnseignantModule { }

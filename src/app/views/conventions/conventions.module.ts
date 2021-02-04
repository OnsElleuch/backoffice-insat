import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { ConventionsRoutingModule } from './conventions-routing.module';
import { AddConventionComponent } from './add-convention/add-convention.component';


@NgModule({
  declarations: [AddConventionComponent],
  imports: [
    CommonModule,
    ConventionsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ConventionsModule { }

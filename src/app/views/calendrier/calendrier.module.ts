import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { CalendrierRoutingModule } from './calendrier-routing.module';
import { AddCalendrierComponent } from './add-calendrier/add-calendrier.component';


@NgModule({
  declarations: [AddCalendrierComponent],
  imports: [
    CommonModule,
    CalendrierRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CalendrierModule { }

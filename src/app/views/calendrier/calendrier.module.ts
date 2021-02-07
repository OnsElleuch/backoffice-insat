import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { CalendrierRoutingModule } from './calendrier-routing.module';
import { AddCalendrierComponent } from './add-calendrier/add-calendrier.component';
import { ListCalendriersComponent } from './list-calendriers/list-calendriers.component';


@NgModule({
  declarations: [AddCalendrierComponent, ListCalendriersComponent],
  imports: [
    CommonModule,
    CalendrierRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CalendrierModule { }

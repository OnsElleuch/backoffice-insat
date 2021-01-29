import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventRoutingModule } from './event-routing.module';
import { AddEventComponent } from './add-event/add-event.component';


@NgModule({
  declarations: [AddEventComponent],
  imports: [
    CommonModule,
    EventRoutingModule
  ]
})
export class EventModule { }

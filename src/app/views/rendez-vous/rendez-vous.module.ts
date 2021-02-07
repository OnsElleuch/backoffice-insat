import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { RendezVousRoutingModule } from './rendez-vous-routing.module';
import { AddRendezVousComponent } from './add-rendez-vous/add-rendez-vous.component';
import { FormsModule } from '@angular/forms';
import { RendezVousListComponent } from './rendez-vous-list/rendez-vous-list.component';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [AddRendezVousComponent, RendezVousListComponent],
  imports: [
    CommonModule,
    RendezVousRoutingModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  providers: [DatePipe]
})
export class RendezVousModule { }

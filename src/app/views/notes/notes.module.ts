import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { NotesRoutingModule } from './notes-routing.module';
import { AddNotesComponent } from './add-notes/add-notes.component';
import { ListNotesComponent } from './list-notes/list-notes.component';


@NgModule({
  declarations: [AddNotesComponent, ListNotesComponent],
  imports: [
    CommonModule,
    NotesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class NotesModule { }

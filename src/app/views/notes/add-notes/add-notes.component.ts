import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { NotesService } from "../../../shared/services/notes.service";

@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.component.html',
  styleUrls: ['./add-notes.component.scss']
})
export class AddNotesComponent implements OnInit {

  constructor(
    private notesServices: NotesService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(formulaire: NgForm){
    this.notesServices.addNotes(formulaire).subscribe(()=>{});
    formulaire.reset();
  }
}

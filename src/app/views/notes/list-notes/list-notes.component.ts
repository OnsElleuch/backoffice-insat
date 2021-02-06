import { Component, OnInit } from '@angular/core';
import { Note } from '../../../shared/models/note.model';
import { NotesService } from '../../../shared/services/notes.service';
declare var require: any;
import { SweetAlert } from 'sweetalert/typings/core';
import { environment } from '../../../../environments/environment';
const swal: SweetAlert = require('sweetalert');

@Component({
  selector: 'app-list-notes',
  templateUrl: './list-notes.component.html',
  styleUrls: ['./list-notes.component.scss']
})
export class ListNotesComponent implements OnInit {

  notes: Note[] = [];
  totalPages : number[];
  previous : string;
  next: string;
  current : number;

  constructor(private notesService: NotesService) { }

  ngOnInit(): void {
    this.getAllNotes(1);
  }

  getAllNotes(page: number){
    this.notesService.getAllNotes(page).subscribe(
      (data)=> {
            this.totalPages = Array(data['meta']['totalPages']);
            this.notes=data['items'];
            this.previous= data['links']['previous'];
            this.next= data['links']['next'];
            this.current = data['meta']['currentPage'];
    });
  }
  supprimer(poste_code : number, index){
    this.notesService.deleteNote(poste_code).subscribe((data)=> {
      this.notes.splice(index,1);
      swal("Succès", "Evenement supprimé avec succès", "success");
    });
  }
  openPdf(url: string) {
    window.open(environment.baseUrlFiles+ url, '_blank');
  }

}

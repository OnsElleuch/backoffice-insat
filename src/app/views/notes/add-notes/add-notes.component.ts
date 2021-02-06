declare var require: any;
import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { NotesService } from "../../../shared/services/notes.service";
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from '../../../shared/models/note.model';
import { SweetAlert } from 'sweetalert/typings/core';
import { SharedServiceService } from '../../../shared/services/shared-service.service';
const swal: SweetAlert = require('sweetalert');

@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.component.html',
  styleUrls: ['./add-notes.component.scss']
})
export class AddNotesComponent implements OnInit {

  note = new Note();
  file:File;

  constructor(
    private notesServices: NotesService,
    private router : Router,
    private route : ActivatedRoute,
    private sharedService: SharedServiceService
  ) {
    this.route.queryParams.subscribe(params => {
      let code = params['code'];
      if(code){
        this.notesServices.getNoteById(parseInt(code)).subscribe((data)=> {
          console.log(data)
        this.note=data;
      })}
  });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.file){
      let formData = new FormData();
      formData.append('file', this.file, this.file.name);
      this.sharedService.uploadFile(formData).subscribe(
        (data )=> {
          this.note.pdfUrl = data['fileUrl'];
          this.notesServices.addNotes(this.note).subscribe((data)=> {
            swal("Succès", "Actualité ajoutée avec succès", "success");
            this.router.navigateByUrl('/notes/list-notes');
          });
        }
      );}
      else{
        this.notesServices.addNotes(this.note).subscribe((data)=> {
          swal("Succès", "Actualité ajoutée avec succès", "success");
          this.router.navigateByUrl('/notes/list-notes');
        });
      }
   
  }

  onReset(formulaire: NgForm){
    formulaire.reset();
  }

  async onFileChange(event) {

    this.file = event.target.files[0];

  }
}

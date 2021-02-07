import { Component, OnInit } from '@angular/core';
import { Enseignant } from '../../../shared/models/enseignant.model';
import { EnseignantService } from '../../../shared/services/enseignant.service';
declare var require: any;
import { SweetAlert } from 'sweetalert/typings/core';
const swal: SweetAlert = require('sweetalert');

@Component({
  selector: 'app-enseignants-list',
  templateUrl: './enseignants-list.component.html',
  styleUrls: ['./enseignants-list.component.scss']
})
export class EnseignantsListComponent implements OnInit {

  enseignants: Enseignant[] = [];
  totalPages: number[];
  previous: string;
  next: string;
  current: number;

  constructor(private enseignantService: EnseignantService) { }

  ngOnInit(): void {
    this.getAllEnseignants(1);

  }
  getAllEnseignants(page: number) {
    this.enseignantService.getAllEnseignants(page, 10).subscribe(
      (data) => {
        this.totalPages = Array(data['meta']['totalPages']);
        this.enseignants = data['items'];
        this.previous = data['links']['previous'];
        this.next = data['links']['next'];
        this.current = data['meta']['currentPage'];
      }
    );
  }
  supprimer(email : string, index){
    this.enseignantService.deleteEnseignant(email).subscribe((data)=> {
      this.enseignants.splice(index,1);
      swal("Succès", "Membre supprimé avec succès", "success");
    });
  }

}

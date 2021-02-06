import { Component, OnInit, ViewChild } from '@angular/core';
declare var require: any;
import { SweetAlert } from 'sweetalert/typings/core';
import { environment } from '../../../../environments/environment';
import { RendezVous } from '../../../shared/models/rendez-vous.model';
import { RendezVousService } from '../../../shared/services/rendez-vous.service';
const swal: SweetAlert = require('sweetalert');

import {ModalDirective} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-rendez-vous-list',
  templateUrl: './rendez-vous-list.component.html',
  styleUrls: ['./rendez-vous-list.component.scss']
})
export class RendezVousListComponent implements OnInit {

  rendezVous: RendezVous[] = [];
  totalPages : number[];
  previous : string;
  next: string;
  current : number;
  image: string;
  @ViewChild('primaryModal') public primaryModal: ModalDirective;
  name: string;

  constructor(private rendezVousService : RendezVousService) { }

  ngOnInit(): void {
    this.getAllRendezVous(1);
  }

  getAllRendezVous(page: number){
    this.rendezVousService.getAllRendezVous(page,10).subscribe(
      (data)=> {
            this.totalPages = Array(data['meta']['totalPages']);
            this.rendezVous=data['items'];
            this.previous= data['links']['previous'];
            this.next= data['links']['next'];
            this.current = data['meta']['currentPage'];
    });
  }
  supprimer(poste_code : number, index){
    this.rendezVousService.deleteRendezVous(poste_code).subscribe((data)=> {
      this.rendezVous.splice(index,1);
      swal("Succès", "Rendez-vous supprimé avec succès", "success");
    });
  }
  showImage(url, name){
    this.image= environment.baseUrlFiles+ url;
    this.name = name;
  }

  getMonth(date) {
    const monthNames = [
      'Janvier',
      'Février',
      'Mars',
      'Avrile',
      'Mai',
      'Juin',
      'Juillet',
      'Août',
      'Septembre',
      'Octobre',
      'Novembre',
      'Decembre',
    ];
    return monthNames[new Date(date).getMonth()];
  }
  getYear(date) {
    return new Date(date).getFullYear();
  }
}

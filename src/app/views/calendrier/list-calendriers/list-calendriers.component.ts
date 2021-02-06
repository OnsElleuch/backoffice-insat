import { Component, OnInit } from '@angular/core';
import { Calendrier } from '../../../shared/models/calendrier.model';
import { CalendrierService } from '../../../shared/services/calendrier.service';
declare var require: any;
import { SweetAlert } from 'sweetalert/typings/core';
import { environment } from '../../../../environments/environment';
const swal: SweetAlert = require('sweetalert');

@Component({
  selector: 'app-list-calendriers',
  templateUrl: './list-calendriers.component.html',
  styleUrls: ['./list-calendriers.component.scss']
})
export class ListCalendriersComponent implements OnInit {

  calendriers: Calendrier[] = [];
  totalPages : number[];
  previous : string;
  next: string;
  current : number;

  constructor(private calendrierService: CalendrierService) { }

  ngOnInit(): void {
    this.getAllCalendriers(1);
  }

  getAllCalendriers(page: number){
    this.calendrierService.getAllCalendriers(page).subscribe(
      (data)=> {
            this.totalPages = Array(data['meta']['totalPages']);
            this.calendriers=data['items'];
            this.previous= data['links']['previous'];
            this.next= data['links']['next'];
            this.current = data['meta']['currentPage'];
    });
  }
  supprimer(poste_code : number, index){
    this.calendrierService.deleteCalendrier(poste_code).subscribe((data)=> {
      this.calendriers.splice(index,1);
      swal("Succès", "Emploi supprimé avec succès", "success");
    });
  }

  openPdf(url: string) {
    window.open(environment.baseUrlFiles+ url, '_blank');
  }
}

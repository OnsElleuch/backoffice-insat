import { Component, OnInit } from '@angular/core';
import { Partenariat } from '../../../shared/models/partenariat.model';
import { PartenariatsService } from '../../../shared/services/partenariats.service';
declare var require: any;
import { SweetAlert } from 'sweetalert/typings/core';
const swal: SweetAlert = require('sweetalert');

@Component({
  selector: 'app-list-partenariats',
  templateUrl: './list-partenariats.component.html',
  styleUrls: ['./list-partenariats.component.scss']
})
export class ListPartenariatsComponent implements OnInit {

  partenariats: Partenariat[] = [];
  totalPages : number[];
  previous : string;
  next: string;
  current : number;

  constructor(private partenariatsService: PartenariatsService) { }

  ngOnInit(): void {
    this.getAllPartenariats(1);
  }

  getAllPartenariats(page: number){
    this.partenariatsService.getAllPartenariats(page).subscribe(
      (data)=> {
            this.totalPages = Array(data['meta']['totalPages']);
            this.partenariats=data['items'];
            this.previous= data['links']['previous'];
            this.next= data['links']['next'];
            this.current = data['meta']['currentPage'];
    });
  }
  supprimer(poste_code : number, index){
    this.partenariatsService.deletePartenariat(poste_code).subscribe((data)=> {
      this.partenariats.splice(index,1);
      swal("Succès", "Partenariat supprimée avec succès", "success");
    });
  }

}

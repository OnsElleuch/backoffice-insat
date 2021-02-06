import { Component, OnInit } from '@angular/core';
import { Convention } from '../../../shared/models/convention.model';
import { ConventionsService } from '../../../shared/services/conventions.service';
declare var require: any;
import { SweetAlert } from 'sweetalert/typings/core';
const swal: SweetAlert = require('sweetalert');

@Component({
  selector: 'app-list-conventions',
  templateUrl: './list-conventions.component.html',
  styleUrls: ['./list-conventions.component.scss']
})
export class ListConventionsComponent implements OnInit {

  conventions: Convention[] = [];
  totalPages : number[];
  previous : string;
  next: string;
  current : number;

  constructor(private conventionsService: ConventionsService) { }

  ngOnInit(): void {
    this.getAllConventions(1);
  }

  getAllConventions(page: number){
    this.conventionsService.getAllConventions(page).subscribe(
      (data)=> {
            this.totalPages = Array(data['meta']['totalPages']);
            this.conventions=data['items'];
            this.previous= data['links']['previous'];
            this.next= data['links']['next'];
            this.current = data['meta']['currentPage'];
    });
  }
  supprimer(poste_code : number, index){
    this.conventionsService.deletePartenariat(poste_code).subscribe((data)=> {
      this.conventions.splice(index,1);
      swal("Succès", "Convention supprimée avec succès", "success");
    });
  }

}

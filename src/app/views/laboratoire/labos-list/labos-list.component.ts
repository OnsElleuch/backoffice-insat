import { Component, OnInit } from '@angular/core';
import { Lab } from '../../../shared/models/lab.model';
import { LabService } from '../../../shared/services/lab.service';
declare var require: any;
import { SweetAlert } from 'sweetalert/typings/core';
const swal: SweetAlert = require('sweetalert');


@Component({
  selector: 'app-labos-list',
  templateUrl: './labos-list.component.html',
  styleUrls: ['./labos-list.component.scss']
})
export class LabosListComponent implements OnInit {

  labs: Lab[] = [];
  totalPages : number[];
  previous : string;
  next: string;
  current : number;

  constructor(private labService : LabService) { }

  ngOnInit(): void {
    this.getAllLabs(1);
  }

  getAllLabs(page: number){
    this.labService.getAllLabs(page,10).subscribe(
      (data)=> {
            this.totalPages = Array(data['meta']['totalPages']);
            this.labs=data['items'];
            this.previous= data['links']['previous'];
            this.next= data['links']['next'];
            this.current = data['meta']['currentPage'];
    });
  }
  supprimer(num : string, index){
    this.labService.deleteLab(num).subscribe((data)=> {
      this.labs.splice(index,1);
      swal("Succès", "Laboratoire supprimée avec succès", "success");
    });
  }

}

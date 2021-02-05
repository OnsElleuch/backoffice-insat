import { Component, OnInit } from '@angular/core';
import { DirectionMember } from '../../../shared/models/direction-member.model';
import { DirectionService } from '../../../shared/services/direction.service';
declare var require: any;
import { SweetAlert } from 'sweetalert/typings/core';
const swal: SweetAlert = require('sweetalert');

@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.scss']
})
export class MembersListComponent implements OnInit {

  members: DirectionMember[] = [];
  totalPages : number[];
  previous : string;
  next: string;
  current : number;

  constructor(private directionService: DirectionService) { }

  ngOnInit(): void {
    this.getAllMembers(1);
  }

  getAllMembers(page: number){
    this.directionService.getAllMembers(page,10).subscribe(
      (data)=> {
            this.totalPages = Array(data['meta']['totalPages']);
            this.members=data['items'];
            this.previous= data['links']['previous'];
            this.next= data['links']['next'];
            this.current = data['meta']['currentPage'];
    });
  }
  supprimer(poste_code : number, index){
    this.directionService.deleteMember(poste_code).subscribe((data)=> {
      this.members.splice(index,1);
      swal("Succès", "Enseignant supprimé avec succès", "success");
    });
  }

}

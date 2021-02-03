declare var require: any;
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DirectionMember } from '../../../shared/models/direction-member.model';
import { DirectionService } from '../../../shared/services/direction.service';
import { SweetAlert } from 'sweetalert/typings/core';
const swal: SweetAlert = require('sweetalert');

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.scss']
})
export class AddMemberComponent implements OnInit {

  membre = new DirectionMember();

  constructor(
    private directionService: DirectionService,
    private router : Router
    ) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.directionService.addMember(this.membre).subscribe((data)=> {
      swal("Succès", "Membre ajouté avec succès", "success");
      this.router.navigateByUrl('/profile');
    });
  }

}

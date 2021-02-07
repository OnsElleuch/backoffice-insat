declare var require: any;
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private router : Router,
    private route : ActivatedRoute
    ) {
      this.route.queryParams.subscribe(params => {
        let code = params['code'];
        if(code){
          this.directionService.getMemberById(parseInt(code)).subscribe((data)=> {
          this.membre=data;
        })}
    });
     }

  ngOnInit(): void {
  }
  onSubmit(){
    this.directionService.addMember(this.membre).subscribe((data)=> {
      swal("Succès", "Membre ajouté avec succès", "success");
      this.router.navigateByUrl('/direction/members-list');
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Lab } from '../../../shared/models/lab.model';
import { LabService } from '../../../shared/services/lab.service';
declare var require: any;
import { SweetAlert } from 'sweetalert/typings/core';
const swal: SweetAlert = require('sweetalert');

@Component({
  selector: 'app-add-lab',
  templateUrl: './add-lab.component.html',
  styleUrls: ['./add-lab.component.scss']
})
export class AddLabComponent implements OnInit {

  lab = new Lab();

  constructor(
    private labService: LabService,
    private router: Router,
    private route: ActivatedRoute
    ) {
      this.route.queryParams.subscribe(params => {
        let num = params['num'];
        if(num){
          this.labService.getLabById(num).subscribe((data)=> {
          this.lab=data;
        })}
    });
     }

  ngOnInit(): void {
  }
  onSubmit(){
    this.labService.addLab(this.lab).subscribe((data)=> {
      swal("Succès", "Labo ajoutée avec succès", "success");
      this.router.navigateByUrl('/profile');
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { Enseignant } from '../../../shared/models/enseignant.model';
import { EnseignantService } from '../../../shared/services/enseignant.service';
import { ActivatedRoute, Router } from '@angular/router';
declare var require: any;
import { SweetAlert } from 'sweetalert/typings/core';
const swal: SweetAlert = require('sweetalert');
@Component({
  selector: 'app-add-enseignant',
  templateUrl: './add-enseignant.component.html',
  styleUrls: ['./add-enseignant.component.scss']
})
export class AddEnseignantComponent implements OnInit {
  enseignant= new Enseignant();

  constructor(
    private enseignantService : EnseignantService,
    private router: Router,
    private route : ActivatedRoute
    ) { 
      this.route.queryParams.subscribe(params => {
        let mail = params['email'];
        if(mail){
          this.enseignantService.getEnseignantById(mail).subscribe((data)=> {
          this.enseignant=data;
        })}
    });
    }

  ngOnInit(): void {
  }
  onSubmit(){
    this.enseignantService.addEnseignant(this.enseignant).subscribe((data)=> {
      swal("Succès", "Enseignant ajouté avec succès", "success")
      this.router.navigateByUrl('/profile');
    });
  }

}

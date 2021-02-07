declare var require: any;
import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { PartenariatsService } from "../../../shared/services/partenariats.service";
import { ActivatedRoute, Router } from '@angular/router';
import { Partenariat } from '../../../shared/models/partenariat.model';
import { SweetAlert } from 'sweetalert/typings/core';
const swal: SweetAlert = require('sweetalert');

@Component({
  selector: 'app-add-partenariat',
  templateUrl: './add-partenariat.component.html',
  styleUrls: ['./add-partenariat.component.scss']
})
export class AddPartenariatComponent implements OnInit {

  partenariat = new Partenariat();

  constructor(
    private partenariatsService: PartenariatsService,
    private router : Router,
    private route : ActivatedRoute
  ) {
    this.route.queryParams.subscribe(params => {
      let code = params['code'];
      if(code){
        this.partenariatsService.getPartenariatById(parseInt(code)).subscribe((data)=> {
        this.partenariat=data;
      })}
  });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.partenariatsService.addPartenariat(this.partenariat).subscribe((data)=> {
      swal("Succès", "Partenariat ajoutée avec succès", "success");
      this.router.navigateByUrl('/partenariats/list-partenariats');
    });
  }

  onReset(formulaire: NgForm){
    formulaire.reset();
  }
}

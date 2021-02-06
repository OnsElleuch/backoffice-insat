declare var require: any;
import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { ConventionsService } from "../../../shared/services/conventions.service";
import { ActivatedRoute, Router } from '@angular/router';
import { Convention } from '../../../shared/models/convention.model';
import { SweetAlert } from 'sweetalert/typings/core';
const swal: SweetAlert = require('sweetalert');

@Component({
  selector: 'app-add-convention',
  templateUrl: './add-convention.component.html',
  styleUrls: ['./add-convention.component.scss']
})
export class AddConventionComponent implements OnInit {

  convention = new Convention();

  constructor(
    private conventionsService: ConventionsService,
    private router : Router,
    private route : ActivatedRoute
  ) {
    this.route.queryParams.subscribe(params => {
      let code = params['code'];
      if(code){
        this.conventionsService.getConventionById(parseInt(code)).subscribe((data)=> {
        this.convention=data;
      })}
  });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.conventionsService.addConvention(this.convention).subscribe((data)=> {
      swal("Succès", "Convention ajoutée avec succès", "success");
      this.router.navigateByUrl('/conventions/list-conventions');
    });
  }

  onReset(formulaire: NgForm){
    formulaire.reset();
  }

}

declare var require: any;
import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { CalendrierService } from "../../../shared/services/calendrier.service";
import { ActivatedRoute, Router } from '@angular/router';
import { Calendrier } from '../../../shared/models/calendrier.model';
import { SweetAlert } from 'sweetalert/typings/core';
const swal: SweetAlert = require('sweetalert');

@Component({
  selector: 'app-add-calendrier',
  templateUrl: './add-calendrier.component.html',
  styleUrls: ['./add-calendrier.component.scss']
})
export class AddCalendrierComponent implements OnInit {

  calendrier = new Calendrier();

  constructor(
    private calendrierService: CalendrierService,
    private router : Router,
    private route : ActivatedRoute
  ) {
    this.route.queryParams.subscribe(params => {
      let code = params['code'];
      if(code){
        this.calendrierService.getCalendrierById(parseInt(code)).subscribe((data)=> {
          console.log(data)
        this.calendrier=data;
      })}
  });
  }

  ngOnInit(): void {
  }

  onSubmit(formulaire: NgForm){
    this.calendrierService.addCalendrier(this.calendrier).subscribe((data)=> {
      swal("Succès", "Emploi ajoutée avec succès", "success");
      this.router.navigateByUrl('/calendrier/list-calendriers');
    });
  }

  onReset(formulaire: NgForm){
    formulaire.reset();
  }
}

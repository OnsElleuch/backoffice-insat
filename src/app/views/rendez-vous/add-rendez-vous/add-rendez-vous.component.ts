import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';
import { RendezVous } from '../../../shared/models/rendez-vous.model';
import { RendezVousService } from '../../../shared/services/rendez-vous.service';
import { SharedServiceService } from '../../../shared/services/shared-service.service';
declare var require: any;
import { SweetAlert } from 'sweetalert/typings/core';
import * as moment from 'moment';
import { DatePipe } from '@angular/common';
const swal: SweetAlert = require('sweetalert');

@Component({
  selector: 'app-add-rendez-vous',
  templateUrl: './add-rendez-vous.component.html',
  styleUrls: ['./add-rendez-vous.component.scss']
})
export class AddRendezVousComponent implements OnInit {
  rendezVous = new RendezVous();
  private file: File;

  constructor(
    private rendezVousService: RendezVousService,
    private sharedService: SharedServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private datePipe: DatePipe
    ) {
      this.route.queryParams.subscribe(params => {
        let id = params['id'];
        if(id){
          this.rendezVousService.getRendezVousById(parseInt(id)).subscribe((data)=> {
          this.rendezVous=data;
        })}
    });
     }

  ngOnInit(): void {
  }
  onSubmit() {
    if(this.file){
    let formData = new FormData();
    formData.append('file', this.file, this.file.name);
    this.sharedService.uploadFile(formData).subscribe(
      (data )=> {
        this.rendezVous.photoUrl = data['fileUrl'];
        this.rendezVousService.addRendezVous(this.rendezVous).subscribe((data)=> {
          swal("Succès", "Rendez-Vous ajouté avec succès", "success");
          this.router.navigate(['/rendez-vous/rendez-vous-list']);
        });
      }
    );}
    else{
      this.rendezVousService.addRendezVous(this.rendezVous).subscribe((data)=> {
        swal("Succès", "Rendez-Vous ajouté avec succès", "success");
        this.router.navigate(['/rendez-vous/rendez-vous-list']);
      });
    }
    
  }
  async onFileChange(event) {

    this.file = event.target.files[0];

  }

}

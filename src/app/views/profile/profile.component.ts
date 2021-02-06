declare var require: any;

import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { SweetAlert } from 'sweetalert/typings/core';
import { User } from '../../shared/models/user.model';
import { ChangeInfoService } from '../../shared/services/profile.service';
const swal: SweetAlert = require('sweetalert');

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  constructor( private changeInfoService: ChangeInfoService ) {}

  productForm: FormGroup;
  user = new User();
  private file: File;


  ngOnInit(): void {
    // add a getLoggedUser from service 
    this.user = JSON.parse(localStorage.getItem('user'));

  }
  onSubmit(formulaire: NgForm) {
    this.changeInfoService.changeInfo(this.user.id, formulaire.value).subscribe((res) => {
      swal("Succès", "Profil mis ajours avec succès", "success");
      });
  }
  async uploadUserPhoto(event){
    this.file = event.target.files[0];
  }
 
}

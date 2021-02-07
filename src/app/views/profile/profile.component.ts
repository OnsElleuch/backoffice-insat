declare var require: any;

import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { SweetAlert } from 'sweetalert/typings/core';
import { environment } from '../../../environments/environment';
import { User } from '../../shared/models/user.model';
import { ChangeInfoService } from '../../shared/services/profile.service';
import { SharedServiceService } from '../../shared/services/shared-service.service';
const swal: SweetAlert = require('sweetalert');

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  constructor( private changeInfoService: ChangeInfoService, private sharedService: SharedServiceService ) {}

  productForm: FormGroup;
  user : User= new User();
  private file: File;
  baseFileUrl= environment.baseUrlFiles;


  ngOnInit(): void {
    // add a getLoggedUser from service 
   // this.user= new User(JSON.parse(localStorage.getItem('user')).id,JSON.parse(localStorage.getItem('user')).name, JSON.parse(localStorage.getItem('user')).privilege,JSON.parse(localStorage.getItem('user')).email,JSON.parse(localStorage.getItem('user')).password,JSON.parse(localStorage.getItem('user')).profile_picture,JSON.parse(localStorage.getItem('user')).description,JSON.parse(localStorage.getItem('user')).president);
    
  }
  onSubmit(formulaire: NgForm) {
    if(this.file){
      let formData = new FormData();
      formData.append('file', this.file, this.file.name);
      this.sharedService.uploadFile(formData).subscribe(
        (data )=> {
          this.user.profile_picture = data['fileUrl'];
          this.changeInfoService.changeInfo(this.user.id, this.user).subscribe((res) => {
            swal("Succès", "Profil mis ajours avec succès", "success");
            localStorage.setItem('user', JSON.stringify(this.user));
            });
        }
      );}
      else{
        this.changeInfoService.changeInfo(this.user.id, this.user).subscribe((res) => {
          swal("Succès", "Profil mis ajours avec succès", "success");
          localStorage.setItem('user', JSON.stringify(this.user));
          });
      }
   
  }
  async uploadUserPhoto(event){
    this.file = event.target.files[0];
  }
 
}

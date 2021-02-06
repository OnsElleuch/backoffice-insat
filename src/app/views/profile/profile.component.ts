import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from '../../shared/models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  productForm: FormGroup;
  user = new User();
  private file: File;


  constructor() { }

  ngOnInit(): void {
    // add a getLoggedUser from service 
  }
  onSubmit(){
    console.log(this.user);
  }
  async uploadUserPhoto(event){
    this.file = event.target.files[0];
  }
 
}

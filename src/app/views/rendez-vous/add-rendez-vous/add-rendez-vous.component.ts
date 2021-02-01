import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { RendezVous } from '../../../shared/models/rendez-vous.model';
import { RendezVousService } from '../../../shared/services/rendez-vous.service';
import { SharedServiceService } from '../../../shared/services/shared-service.service';

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
    private router: Router
    ) { }

  ngOnInit(): void {
  }
  onSubmit() {
    let formData = new FormData();
    formData.append('file', this.file, this.file.name);
    this.sharedService.uploadFile(formData).subscribe(
      (data )=> {
        this.rendezVous.photoUrl = data['fileUrl'];
        this.rendezVousService.addRendezVous(this.rendezVous).subscribe((data)=> {
          this.router.navigate(['/profile']);
        });
      }
    );
    
  }
  async onFileChange(event) {

    this.file = event.target.files[0];

  }

}

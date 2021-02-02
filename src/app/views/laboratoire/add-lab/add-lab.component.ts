import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Lab } from '../../../shared/models/lab.model';
import { LabService } from '../../../shared/services/lab.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-add-lab',
  templateUrl: './add-lab.component.html',
  styleUrls: ['./add-lab.component.scss']
})
export class AddLabComponent implements OnInit {

  lab = new Lab();

  constructor(
    private labService: LabService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.labService.addLab(this.lab).subscribe((data)=> {
      swal("Succès", "Membre ajouté avec succès", "success");
      this.router.navigateByUrl('/profile');
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { Enseignant } from '../../../shared/models/enseignant.model';
import { EnseignantService } from '../../../shared/services/enseignant.service';
import swal from 'sweetalert';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-enseignant',
  templateUrl: './add-enseignant.component.html',
  styleUrls: ['./add-enseignant.component.scss']
})
export class AddEnseignantComponent implements OnInit {
  enseignant= new Enseignant();

  constructor(
    private enseignantService : EnseignantService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.enseignantService.addEnseignant(this.enseignant).subscribe((data)=> {
      swal("Succès", "Enseignant ajouté avec succès", "success");
      this.router.navigateByUrl('/profile');
    });
  }

}

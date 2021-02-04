import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { PartenariatsService } from "../../../shared/services/partenariats.service";

@Component({
  selector: 'app-add-partenariat',
  templateUrl: './add-partenariat.component.html',
  styleUrls: ['./add-partenariat.component.scss']
})
export class AddPartenariatComponent implements OnInit {

  constructor(
    private partenariatsService: PartenariatsService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(formulaire: NgForm){
    this.partenariatsService.addPartenariat(formulaire).subscribe(()=>{});
    formulaire.reset();
  }

  onReset(formulaire: NgForm){
    formulaire.reset();
  }
}

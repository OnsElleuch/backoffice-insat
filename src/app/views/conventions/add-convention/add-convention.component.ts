import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { ConventionsService } from "../../../shared/services/conventions.service";

@Component({
  selector: 'app-add-convention',
  templateUrl: './add-convention.component.html',
  styleUrls: ['./add-convention.component.scss']
})
export class AddConventionComponent implements OnInit {

  constructor(
    private conventionsService: ConventionsService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(formulaire: NgForm){
    this.conventionsService.addConvention(formulaire).subscribe(()=>{});
    formulaire.reset();
  }

}

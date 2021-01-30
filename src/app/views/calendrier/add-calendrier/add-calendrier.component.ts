import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { CalendrierService } from "../../../shared/services/calendrier.service";

@Component({
  selector: 'app-add-calendrier',
  templateUrl: './add-calendrier.component.html',
  styleUrls: ['./add-calendrier.component.scss']
})
export class AddCalendrierComponent implements OnInit {

  constructor(
    private calendrierService: CalendrierService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(formulaire: NgForm){
    this.calendrierService.addCalendrier(formulaire).subscribe(()=>{});
  }

}

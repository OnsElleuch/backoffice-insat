import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { ClubService } from "../../../shared/services/club.service";
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {

  clubs : any
  clubsNames: any
  clubsDescription: any

  constructor(
    private clubService: ClubService
  ) { }

  ngOnInit(): void {
    this.clubService.getClubs().pipe(
      map((club) =>{
        this.clubs.push(club);
      })
    )
      for (let club of this.clubs){
        console.log(club.clubName)
      }

  }

  onSubmit(formulaire: NgForm){
    console.log(this.clubs);
    console.log(this.clubsDescription)
    formulaire.reset();
  }

  onReset(formulaire: NgForm){
    formulaire.reset();
  }

}

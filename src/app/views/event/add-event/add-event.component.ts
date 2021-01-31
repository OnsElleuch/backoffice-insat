import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { ClubService } from "../../../shared/services/club.service";
import { filter, map, tap } from 'rxjs/operators';
import { Club } from "../../../shared/models/club.model";

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {

  clubs: Club[] = []
  clubsNames: string[]  = []
  clubsDescription: string[] = []

  constructor(
    private clubService: ClubService
  ) { }

  ngOnInit(): void {
    this.clubService.getClubs().pipe(
      map((clubs) =>{ 
        clubs.filter( (club) => {
          this.clubsNames.push(club.clubName);
          this.clubsDescription.push(club.clubDescription);
        })
        return clubs
      })    
    )
    .subscribe( (clubs) => {
      this.clubs = clubs;
    })
  }

  onSubmit(formulaire: NgForm){
    console.log(formulaire.value)
    formulaire.reset();
  }

  onReset(formulaire: NgForm){
    formulaire.reset();
  }

}

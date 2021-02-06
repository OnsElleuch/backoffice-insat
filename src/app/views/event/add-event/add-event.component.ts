declare var require: any;
import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { ClubService } from "../../../shared/services/club.service";
import { EventService } from "../../../shared/services/event.service";
import { filter, map, tap } from 'rxjs/operators';
import { Club } from "../../../shared/models/club.model";
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from '../../../shared/models/event.model';
import { SweetAlert } from 'sweetalert/typings/core';
import { SharedServiceService } from '../../../shared/services/shared-service.service';
const swal: SweetAlert = require('sweetalert');

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {

  clubs: Club[] = []
  clubsNames: string[]  = []
  clubsDescription: string[] = []
  private file: File;
  event = new Event();

  constructor(
    private clubService: ClubService,
    private eventService: EventService,
    private router : Router,
    private route : ActivatedRoute,
    private sharedService: SharedServiceService
  ) {
    this.route.queryParams.subscribe(params => {
      let code = params['code'];
      if(code){
        this.eventService.getEventById(parseInt(code)).subscribe((data)=> {
        this.event=data;
      })}
  });
  }

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

  onSubmit(){
    if(this.file){
      let formData = new FormData();
      formData.append('file', this.file, this.file.name);
      this.sharedService.uploadFile(formData).subscribe(
        (data )=> {
          this.event.photo_url = data['fileUrl'];
          this.eventService.addEvent(this.event).subscribe((data)=> {
            swal("Succès", "Evenement ajouté avec succès", "success");
            this.router.navigateByUrl('/event/list-events');
          });
        }
      );}
      else{
        this.eventService.addEvent(this.event).subscribe((data)=> {
          swal("Succès", "Evenement ajouté avec succès", "success");
          this.router.navigateByUrl('/event/list-events');
        });
      }
    
  }

  onReset(formulaire: NgForm){
    formulaire.reset();
  }
  async onFileChange(event) {

    this.file = event.target.files[0];

  }

}

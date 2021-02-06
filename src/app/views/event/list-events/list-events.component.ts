import { Component, OnInit } from '@angular/core';
import { Event } from '../../../shared/models/event.model';
import { EventService } from '../../../shared/services/event.service';
declare var require: any;
import { SweetAlert } from 'sweetalert/typings/core';
const swal: SweetAlert = require('sweetalert');

@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.component.html',
  styleUrls: ['./list-events.component.scss']
})
export class ListEventsComponent implements OnInit {

  events: Event[] = [];
  totalPages : number[];
  previous : string;
  next: string;
  current : number;

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.getAllEvents(1);
  }

  getAllEvents(page: number){
    this.eventService.getAllEvents(page).subscribe(
      (data)=> {
            this.totalPages = Array(data['meta']['totalPages']);
            this.events=data['items'];
            this.previous= data['links']['previous'];
            this.next= data['links']['next'];
            this.current = data['meta']['currentPage'];
    });
  }
  supprimer(poste_code : number, index){
    this.eventService.deleteEvent(poste_code).subscribe((data)=> {
      this.events.splice(index,1);
      swal("Succès", "Evenement supprimé avec succès", "success");
    });
  }


}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GenericService } from './generic.service';
import { environment } from '../../../environments/environment';
import { Event } from '../models/event.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService extends GenericService{

  constructor(private http: HttpClient) { 
    super()
  }

  getEventById(code: number) : Observable<Event> {
    return this.http.get<Event>(environment.baseUrl + 'evenments/getEventsById/' + code);
  }

  addEvent(event){
    console.log(event)
    return this.http.post(environment.baseUrl + "evenments/createEvent", event);
  }
  
  getAllEvents(page: number): Observable<Event[]>{
    return this.http.get<Event[]>(environment.baseUrl +"evenments/getEventsPaginate?page="+page+"&limit=2");
  }

  deleteEvent(id : number){
    return this.http.delete(environment.baseUrl+ "evenments/removeEvent/" + id);
  }
}

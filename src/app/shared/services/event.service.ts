import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GenericService } from './generic.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventService extends GenericService{

  constructor(private http: HttpClient) { 
    super()
  }

  addEvent(formulaire){
    console.log(formulaire.value)
    return this.http.post(environment.baseUrl + "evenments/createEvent", formulaire.value);
  }

}

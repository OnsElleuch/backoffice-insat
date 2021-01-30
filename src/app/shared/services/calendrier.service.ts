import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GenericService } from './generic.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CalendrierService extends GenericService{

  constructor(private http: HttpClient) {
    super()
  }

  addCalendrier(formulaire){
    return this.http.get(environment.baseUrl + "calendrier", formulaire.value);
  }
}

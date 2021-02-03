import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Type } from '@angular/core';
import { environment } from '../../../environments/environment';
import { RendezVous } from '../models/rendez-vous.model';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class RendezVousService extends GenericService{

  constructor(private http: HttpClient) { 
    super();
  }


  addRendezVous(rendezVous){
    return this.http.post(environment.baseUrl + "rendez-vous/createRendezVous", rendezVous);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GenericService } from './generic.service';
import { environment } from '../../../environments/environment';
import { Calendrier } from '../models/calendrier.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalendrierService extends GenericService{

  constructor(private http: HttpClient) {
    super()
  }

  getCalendrierById(code: number) : Observable<Calendrier> {
    return this.http.get<Calendrier>(environment.baseUrl + 'calendrier/' + code);
  }

  addCalendrier(calendrier){
    return this.http.post(environment.baseUrl + "calendrier", calendrier);
  }

  getAllCalendriers(page: number): Observable<Calendrier[]>{
    return this.http.get<Calendrier[]>(environment.baseUrl +"calendrier/paginate?page="+page+"&limit=2");
  }

  deleteCalendrier(id : number){
    return this.http.delete(environment.baseUrl+ "calendrier/" + id);
  }
}

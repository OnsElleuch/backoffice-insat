import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Type } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { RendezVousModule } from '../../views/rendez-vous/rendez-vous.module';
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
  getAllRendezVous(page: number, limit : number): Observable<RendezVous[]>{
    return this.http.get<RendezVous[]>(environment.baseUrl +"rendez-vous/getAllRendezVous?page="+page+"&limit=" + limit);
  }
  deleteRendezVous(id : number){
    return this.http.delete(environment.baseUrl+ "rendez-vous/deleteRendezVousById/" + id);
  }
  getRendezVousById(id: number) : Observable<RendezVous> {
    return this.http.get<RendezVous>(environment.baseUrl + 'rendez-vous/getRendezVousById/' + id);
  }
}

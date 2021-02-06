import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Enseignant } from '../models/enseignant.model';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class EnseignantService extends GenericService{

  constructor(private http: HttpClient) {
    super();
   }

   addEnseignant(enseignant: Enseignant){
     return this.http.post(environment.baseUrl+ 'department/addEnseignant', enseignant);
   }

   getAllEnseignants(page: number, limit : number): Observable<Enseignant[]>{
    return this.http.get<Enseignant[]>(environment.baseUrl +"department/getAllEnseignants?page="+page+"&limit=" + limit);
  }
  deleteEnseignant(email : string){
    return this.http.delete(environment.baseUrl+ "department/deleteEnseignantById/" + email);
  }
  getEnseignantById(email: string): Observable<Enseignant> {
    return this.http.get<Enseignant>(environment.baseUrl + 'department/getEnseignantById/'+ email);
  }
}

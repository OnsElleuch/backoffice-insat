import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
}

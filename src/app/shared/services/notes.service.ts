import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GenericService } from './generic.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotesService extends GenericService{

  constructor(private http: HttpClient) { 
    super();
  }

  addNotes(formulaire){
    return this.http.post(environment.baseUrl + "notes", formulaire.value);
  }

}

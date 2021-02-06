import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GenericService } from './generic.service';
import { environment } from '../../../environments/environment';
import { Note } from '../models/note.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService extends GenericService{

  constructor(private http: HttpClient) { 
    super();
  }

  getNoteById(code: number) : Observable<Note> {
    return this.http.get<Note>(environment.baseUrl + 'notes/' + code);
  }

  addNotes(note){
    return this.http.post(environment.baseUrl + "notes", note);
  }

  getAllNotes(page: number): Observable<Note[]>{
    return this.http.get<Note[]>(environment.baseUrl +"notes/paginate?page="+page+"&limit=2");
  }

  deleteNote(id : number){
    return this.http.delete(environment.baseUrl+ "notes/" + id);
  }

}

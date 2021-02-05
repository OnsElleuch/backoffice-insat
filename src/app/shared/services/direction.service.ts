import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { DirectionMember } from '../models/direction-member.model';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class DirectionService extends GenericService{

  constructor(private http: HttpClient) { 
    super();
  }

  addMember(membre : DirectionMember){
    return this.http.post(environment.baseUrl + "direction/addMember", membre);
  }

  getAllMembers(page: number): Observable<DirectionMember[]>{
    return this.http.get<DirectionMember[]>(environment.baseUrl +"direction/getAllMembers?page="+page+"&limit=2");
  }
  deleteMember(poste_code : number){
    return this.http.delete(environment.baseUrl+ "direction/deleteMemberById/" + poste_code);
  }
}

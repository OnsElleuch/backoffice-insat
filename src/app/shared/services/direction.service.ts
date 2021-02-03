import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
}

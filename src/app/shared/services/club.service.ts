import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GenericService } from './generic.service';
import { environment } from '../../../environments/environment';
import { Club } from "../models/club.model"
@Injectable({
  providedIn: 'root'
})
export class ClubService extends GenericService{

  constructor(private http: HttpClient) {
    super();
  }

  getClubs(){
    return this.http.get<Club[]>(environment.baseUrl + "clubs/getClubs")
  }

}

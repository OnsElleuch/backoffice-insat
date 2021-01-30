import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GenericService } from './generic.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClubService extends GenericService{

  constructor(private http: HttpClient) {
    super();
  }

  getClubs(){
    return this.http.get(environment.baseUrl + "clubs/getClubs")
  }

}

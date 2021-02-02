import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Lab } from '../models/lab.model';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class LabService extends GenericService{

  constructor(private http: HttpClient) {
    super();
   }


  addLab(lab : Lab){
    return this.http.post(environment.baseUrl+'department/addLab', lab);

  }
}

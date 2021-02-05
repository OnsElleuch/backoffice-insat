import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
  getAllLabs(page: number, limit : number): Observable<Lab[]>{
    return this.http.get<Lab[]>(environment.baseUrl +"department/getAllLabs?page="+page+"&limit=" + limit);
  }
  deleteLab(number : string){
    return this.http.delete(environment.baseUrl+ "department/deleteLabById/" + number);
  }
  getLabById(number: string): Observable<Lab> {
    return this.http.get<Lab>(environment.baseUrl + 'department/getLabById/'+ number);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GenericService } from './generic.service';
import { environment } from '../../../environments/environment';
import { Convention } from '../models/convention.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConventionsService extends GenericService{

  constructor(private http: HttpClient) {
    super();
  }

  getConventionById(code: number) : Observable<Convention> {
    return this.http.get<Convention>(environment.baseUrl + 'convention/' + code);
  }

  addConvention(convention){
    return this.http.post(environment.baseUrl + "convention", convention);
  }

  getAllConventions(page: number): Observable<Convention[]>{
    return this.http.get<Convention[]>(environment.baseUrl +"convention/paginate?page="+page+"&limit=2");
  }

  deletePartenariat(id : number){
    return this.http.delete(environment.baseUrl+ "convention/" + id);
  }

}

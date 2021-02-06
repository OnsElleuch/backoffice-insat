import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GenericService } from './generic.service';
import { environment } from '../../../environments/environment';
import { Partenariat } from '../models/partenariat.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PartenariatsService extends GenericService{

  constructor(private http: HttpClient) {
    super();
  }

  getPartenariatById(code: number) : Observable<Partenariat> {
    return this.http.get<Partenariat>(environment.baseUrl + 'partenariat/' + code);
  }

  addPartenariat(partenariat){
    return this.http.post(environment.baseUrl + "partenariat", partenariat);
  }

  getAllPartenariats(page: number): Observable<Partenariat[]>{
    return this.http.get<Partenariat[]>(environment.baseUrl +"partenariat/paginate?page="+page+"&limit=2");
  }

  deletePartenariat(id : number){
    return this.http.delete(environment.baseUrl+ "partenariat/" + id);
  }
}

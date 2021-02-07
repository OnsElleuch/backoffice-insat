import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService extends GenericService{

  constructor(private http: HttpClient) {
    super();
    this.headers = new HttpHeaders({'Content-type': 'multipart/form-data'})
   }

   uploadFile(file){
    return this.http.post(environment.baseUrl + "uploadFile", file);
   }
}

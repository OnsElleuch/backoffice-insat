import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GenericService } from './generic.service';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { login } from '../models/login.model';

@Injectable()
export class LoginService extends GenericService {
  constructor(private http: HttpClient) {
    super();
  }
  login(payload): Observable<any> {
    return this.http.post<login>(environment.baseUrl + 'auth/login-admin', payload);
  }
}

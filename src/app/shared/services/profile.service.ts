import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GenericService } from './generic.service';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class ChangeInfoService extends GenericService {
  constructor(private http: HttpClient) {
    super();
  }
  changeInfo(id, info): Observable<any> {
    return this.http.put<any>(environment.baseUrl + 'admin/' + id, info);
  }
}

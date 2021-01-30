import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GenericService } from './generic.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService extends GenericService{

  constructor(private http: HttpClient) { 
    super();
  }

  addNews(formulaire){
    console.log(formulaire.value);
    console.log(environment.baseUrl + "nouveautes/createNews")
    return this.http.post(environment.baseUrl + "nouveautes/createNews", formulaire.value);
  }

}

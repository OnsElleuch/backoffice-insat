import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GenericService } from './generic.service';
import { environment } from '../../../environments/environment';
import { News } from '../models/news.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService extends GenericService{

  constructor(private http: HttpClient) { 
    super();
  }

  getNewsById(code: number) : Observable<News> {
    return this.http.get<News>(environment.baseUrl + 'nouveautes/getNewsById/' + code);
  }

  addNews(news){

    return this.http.post(environment.baseUrl + "nouveautes/createNews", news);
  }

  getAllNews(page: number): Observable<News[]>{
    return this.http.get<News[]>(environment.baseUrl +"nouveautes/getNews?page="+page+"&limit=2");
  }

  deleteNews(poste_code : number){
    return this.http.delete(environment.baseUrl+ "nouveautes/removeDelete/" + poste_code);
  }


}

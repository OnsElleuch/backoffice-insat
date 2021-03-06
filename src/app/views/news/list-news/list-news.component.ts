import { Component, OnInit, ViewChild } from '@angular/core';
import { News } from '../../../shared/models/news.model';
import { NewsService } from '../../../shared/services/news.service';
declare var require: any;
import { SweetAlert } from 'sweetalert/typings/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { environment } from '../../../../environments/environment';
const swal: SweetAlert = require('sweetalert');

@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.scss']
})
export class ListNewsComponent implements OnInit {

  news: News[] = [];
  totalPages : number[];
  previous : string;
  next: string;
  current : number;
  image: string;
  @ViewChild('primaryModal') public primaryModal: ModalDirective;
  name: string;

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.getAllNews(1);
  }

  getAllNews(page: number){
    this.newsService.getAllNews(page).subscribe(
      (data)=> {
            this.totalPages = Array(data['meta']['totalPages']);
            this.news=data['items'];
            this.previous= data['links']['previous'];
            this.next= data['links']['next'];
            this.current = data['meta']['currentPage'];
    });
  }
  supprimer(poste_code : number, index){
    this.newsService.deleteNews(poste_code).subscribe((data)=> {
      this.news.splice(index,1);
      swal("Succès", "Actualité supprimée avec succès", "success");
    });
  }

  showImage(url, name){
    this.image= environment.baseUrlFiles+ url;
    this.name = name;
  }

}

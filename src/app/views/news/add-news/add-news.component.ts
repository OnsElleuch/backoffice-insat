declare var require: any;

import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { News } from '../../../shared/models/news.model';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from "../../../shared/services/news.service";
import { SweetAlert } from 'sweetalert/typings/core';
const swal: SweetAlert = require('sweetalert');

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.scss']
})
export class AddNewsComponent implements OnInit {
  
  newsItem = new News();


  constructor(
    private newsService : NewsService,
    private router : Router,
    private route : ActivatedRoute
    ) {
      this.route.queryParams.subscribe(params => {
        let code = params['code'];
        if(code){
          this.newsService.getNewsById(parseInt(code)).subscribe((data)=> {
            console.log(data)
          this.newsItem=data;
        })}
    });
  }

  ngOnInit(): void {
  }


  onSubmit(){
    console.log(this.newsItem)
    this.newsService.addNews(this.newsItem).subscribe((data)=> {
      swal("Succès", "Membre ajouté avec succès", "success");
      this.router.navigateByUrl('/news/list-news');
    });

  }

  onReset(formulaire: NgForm){
    formulaire.reset();
  }
}

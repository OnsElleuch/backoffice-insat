declare var require: any;

import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { News } from '../../../shared/models/news.model';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from "../../../shared/services/news.service";
import { SweetAlert } from 'sweetalert/typings/core';
import { SharedServiceService } from '../../../shared/services/shared-service.service';
const swal: SweetAlert = require('sweetalert');

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.scss']
})
export class AddNewsComponent implements OnInit {
  
  newsItem = new News();
  private file:File;


  constructor(
    private newsService : NewsService,
    private router : Router,
    private route : ActivatedRoute,
    private sharedService: SharedServiceService
    ) {
      this.route.queryParams.subscribe(params => {
        let code = params['code'];
        if(code){
          this.newsService.getNewsById(parseInt(code)).subscribe((data)=> {
          this.newsItem=data;
        })}
    });
  }

  ngOnInit(): void {
  }


  onSubmit(){
    if(this.file){
      let formData = new FormData();
      formData.append('file', this.file, this.file.name);
      this.sharedService.uploadFile(formData).subscribe(
        (data )=> {
          this.newsItem.photo_url = data['fileUrl'];
          this.newsService.addNews(this.newsItem).subscribe((data)=> {
            swal("Succès", "Actualité ajoutée avec succès", "success");
            this.router.navigateByUrl('/news/list-news');
          });
        }
      );}
      else{
        this.newsService.addNews(this.newsItem).subscribe((data)=> {
          swal("Succès", "Actualité ajoutée avec succès", "success");
          this.router.navigateByUrl('/news/list-news');
        });
      }
    

  }

  onReset(formulaire: NgForm){
    formulaire.reset();
  }
  async onFileChange(event) {

    this.file = event.target.files[0];

  }
}

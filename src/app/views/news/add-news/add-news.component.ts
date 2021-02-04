import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { NewsService } from "../../../shared/services/news.service";

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.scss']
})
export class AddNewsComponent implements OnInit {

  fileToUpload: File = null;

  constructor(
    private newsService : NewsService
  ) { }

  ngOnInit(): void {
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  onSubmit(formulaire: NgForm){
    this.newsService.addNews(formulaire).subscribe(()=>{});
    formulaire.reset();
  }

  onReset(formulaire: NgForm){
    formulaire.reset();
  }
}

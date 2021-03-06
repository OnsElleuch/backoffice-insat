import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { NewsRoutingModule } from './news-routing.module';
import { AddNewsComponent } from './add-news/add-news.component';
import { ListNewsComponent } from './list-news/list-news.component';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [AddNewsComponent, ListNewsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NewsRoutingModule,
    ModalModule.forRoot()
  ]
})
export class NewsModule { }

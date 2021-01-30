import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { NewsRoutingModule } from './news-routing.module';
import { AddNewsComponent } from './add-news/add-news.component';


@NgModule({
  declarations: [AddNewsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NewsRoutingModule
  ]
})
export class NewsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectionRoutingModule } from './direction-routing.module';
import { AddMemberComponent } from './add-member/add-member.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AddMemberComponent],
  imports: [
    CommonModule,
    DirectionRoutingModule,
    FormsModule
  ]
})
export class DirectionModule { }

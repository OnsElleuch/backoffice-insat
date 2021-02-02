import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddLabComponent } from './add-lab/add-lab.component';
import { LaboratoireRoutingModule } from './laboratoire-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [AddLabComponent],
  imports: [
    CommonModule,
    LaboratoireRoutingModule,
    FormsModule
  ]
})
export class LaboratoireModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddLabComponent } from './add-lab/add-lab.component';
import { LaboratoireRoutingModule } from './laboratoire-routing.module';
import { FormsModule } from '@angular/forms';
import { LabosListComponent } from './labos-list/labos-list.component';



@NgModule({
  declarations: [AddLabComponent, LabosListComponent],
  imports: [
    CommonModule,
    LaboratoireRoutingModule,
    FormsModule
  ]
})
export class LaboratoireModule { }

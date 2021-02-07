import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { PartenariatsRoutingModule } from './partenariats-routing.module';
import { AddPartenariatComponent } from './add-partenariat/add-partenariat.component';
import { ListPartenariatsComponent } from './list-partenariats/list-partenariats.component';


@NgModule({
  declarations: [AddPartenariatComponent, ListPartenariatsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PartenariatsRoutingModule
  ]
})
export class PartenariatsModule { }

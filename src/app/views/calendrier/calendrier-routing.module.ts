import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCalendrierComponent } from './add-calendrier/add-calendrier.component';
import { ListCalendriersComponent } from './list-calendriers/list-calendriers.component';

const routes: Routes = [{
  path: 'add-calendrier',
  component: AddCalendrierComponent
},
{
  path: 'list-calendriers',
  component: ListCalendriersComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendrierRoutingModule { }

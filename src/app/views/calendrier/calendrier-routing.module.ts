import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCalendrierComponent } from './add-calendrier/add-calendrier.component';

const routes: Routes = [{
  path: 'add-calendrier',
  component: AddCalendrierComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendrierRoutingModule { }

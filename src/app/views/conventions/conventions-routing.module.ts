import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddConventionComponent } from './add-convention/add-convention.component';

const routes: Routes = [{
  path: 'add-convention',
  component: AddConventionComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConventionsRoutingModule { }

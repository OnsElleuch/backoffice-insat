import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddConventionComponent } from './add-convention/add-convention.component';
import { ListConventionsComponent } from './list-conventions/list-conventions.component';

const routes: Routes = [{
  path: 'add-convention',
  component: AddConventionComponent
},
{
  path: 'list-conventions',
  component: ListConventionsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConventionsRoutingModule { }

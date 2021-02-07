import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPartenariatComponent } from './add-partenariat/add-partenariat.component';
import { ListPartenariatsComponent } from './list-partenariats/list-partenariats.component';

const routes: Routes = [{
  path: 'add-partenariat',
  component: AddPartenariatComponent
},
{
  path: 'list-partenariats',
  component: ListPartenariatsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartenariatsRoutingModule { }

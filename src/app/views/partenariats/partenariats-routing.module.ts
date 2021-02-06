import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPartenariatComponent } from './add-partenariat/add-partenariat.component';

const routes: Routes = [{
  path: 'add-partenariat',
  component: AddPartenariatComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartenariatsRoutingModule { }

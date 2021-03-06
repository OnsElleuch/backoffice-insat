import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMemberComponent } from './add-member/add-member.component';
import { MembersListComponent } from './members-list/members-list.component';

const routes: Routes = [
  {
    path: 'add-member',
    component: AddMemberComponent
  },
  {
    path: 'members-list',
    component: MembersListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectionRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberManagementComponent } from './member-management/member-management.component';
import { MemberListComponent } from './member-list/member-list.component';



@NgModule({
  declarations: [MemberManagementComponent, MemberListComponent],
  imports: [
    CommonModule
  ],
  exports: [MemberManagementComponent]
})
export class MemberManagementModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberManagementComponent } from './member-management/member-management.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MemberFormModule } from '../member-form/member-form.module';



@NgModule({
  declarations: [MemberManagementComponent, MemberListComponent],
  imports: [
    CommonModule,
    MemberFormModule
  ],
  exports: [MemberManagementComponent]
})
export class MemberManagementModule { }

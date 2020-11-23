import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberManagementComponent } from './member-management/member-management.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MemberFormModule } from '../member-form/member-form.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material/material.module';



@NgModule({
  declarations: [MemberManagementComponent, MemberListComponent],
  imports: [
    CommonModule,
    MemberFormModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [MemberManagementComponent]
})
export class MemberManagementModule { }

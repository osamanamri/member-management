import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberFormComponent } from './member-form/member-form.component';



@NgModule({
  declarations: [MemberFormComponent],
  imports: [
    CommonModule
  ],
  exports: [MemberFormComponent]
})
export class MemberFormModule { }

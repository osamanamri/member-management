import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberComponent } from './components/member/member.component';
import { FormComponent } from './pages/form/form.component';
import { ListComponent } from './pages/list/list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material/material.module';
//import { MemberService } from './services/member.service';



@NgModule({
  declarations: [MemberComponent, FormComponent, ListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ]/* ,
  providers:[MemberService] */
})
export class MemberModule { }

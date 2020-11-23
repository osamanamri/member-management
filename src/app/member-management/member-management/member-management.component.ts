import { members } from './../../shared/data/members';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Member } from 'src/app/shared/interfaces/member';

@Component({
  selector: 'app-member-management',
  templateUrl: './member-management.component.html',
  styleUrls: ['./member-management.component.scss']
})
export class MemberManagementComponent implements OnInit {

  formGroup: FormGroup;
  members: Member[];

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.members = members;
/*     this.formGroup = this.fb.group({
      name:'',
      dni:''
    })
 */
    this.createForm();
}

  createForm(member={}){
    this.formGroup = this.fb.group(member);
  }
  sendToForm(member){
    this.createForm(member);
  }

  recibir(member){
    this.members.push(member);
  }

  delete(member){

    this.members.splice(this.members.findIndex(e=> e.dni == member.dni),1)

  }

  edit(member){
    this.members.splice(this.members.findIndex(e=> e.dni == member.dni),1,member)
  }

}

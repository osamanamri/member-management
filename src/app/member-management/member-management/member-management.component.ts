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
    this.formGroup = this.fb.group({
      name:'John',
      dni:'1234567'
    })
  }

  recibir(member){
    this.members.push(member);
  }

}

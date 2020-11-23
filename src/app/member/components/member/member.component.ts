import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Member } from '../../interfaces/member';
import { MemberService } from '../../services/member.service';
import { MemberValidator } from './../../services/member.validator';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {

  formGroup: FormGroup;
  members: Member[];

  constructor(private fb: FormBuilder,
              private memberService:   MemberService,
              private memberValidator: MemberValidator) { }

  ngOnInit(): void {
    this.members = this.memberService.read();
    this.createForm();
  }

  createForm(member:Member = {}) {
    console.log(member);
    this.formGroup = this.fb.group({
      name: [member?.name, Validators.required],
      dni:  [member?.dni,  [Validators.required, this.memberValidator.validateDni.bind(this)]]
    });
  }

  reset():void{
    this.formGroup.reset();
  }

  sendToForm(member) {
    this.createForm(member);
  }

  recibir(member) {
    if (!this.memberService.find(member.dni)) {

      this.memberService.create(member);

    } else {

      this.memberService.update(member);
    }

    this.reset();
  }

  erase(member) {
    this.memberService.delete(member);
  }

}

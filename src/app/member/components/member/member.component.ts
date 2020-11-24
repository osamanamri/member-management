import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Member } from '../../interfaces/member';
import { MemberService } from '../../services/member.service';
import { MemberValidator } from './../../services/member.validator';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  formGroup: FormGroup;
  members: Member[];
  readonly:boolean;
  caret: string;

  constructor(private fb: FormBuilder,
              private memberService:   MemberService,
              private memberValidator: MemberValidator) { }

  ngOnInit(): void {
    this.memberService.read$().subscribe(members => this.members = members);
    this.createForm();
    this.caret = 'enviar';
    this.readonly = false;
  }

  createForm(member:Member = {}) {
    console.log(member);
    this.formGroup = this.fb.group({
      id:   [member?.id],
      name: [member?.name, Validators.required],
      dni:  [member?.dni,  [Validators.required, this.memberValidator.validateDni.bind(this)]]
    });
  }

  reset():void{
    this.formGroup.reset();
  }

  sendToForm(member) {
    this.createForm(member);
    this.caret = 'editar';
    this.readonly = true;
  }

  recibir(member) {
    if (!this.memberService.find(member.dni)) {

      this.subscription = this.memberService.create$(member).subscribe(console.log);

    } else {

      this.subscription = this.memberService.update$(member);
    }

    this.reset();
    this.caret = 'enviar';
    this.readonly =false;
    this.subscription.unsubscribe();
  }

  erase(member) {
    this.memberService.delete(member);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}

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
  member:Member={};
  readonly:boolean;
  caret: string;
  error: any;
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
      dni:  [member?.dni,  [Validators.required/* , this.memberValidator.validateDni.bind(this) */]]
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

    this.memberService.find$(member).subscribe(member => this.member = member);
/*       console.log(this.error); */
    if (this.member) {

      /* this.subscription = */ this.memberService.create$(member);//.subscribe(console.log);

    } else {

      /* this.subscription = */ this.memberService.update$(member);//.subscribe(console.log);
    }

    this.reset();
    this.caret = 'enviar';
    this.readonly =false;
/*     this.subscription.unsubscribe(); */
    this.memberService.find$(member).subscribe(member => this.member = member).unsubscribe();
  }

  erase(member) {
      /* this.subscription = */this.memberService.delete$(member);//.subscribe(console.log);
  }

  ngOnDestroy(){
    /* this.subscription.unsubscribe(); */
  }

}

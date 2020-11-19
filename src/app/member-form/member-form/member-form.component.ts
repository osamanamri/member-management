import { FormGroup } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Member } from '../../shared/classes/member';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.scss']
})
export class MemberFormComponent implements OnInit {

  member: Member;
  @Input() formGroup: FormGroup;

  @Output() enviar = new EventEmitter<Member>();


  constructor() { }

  ngOnInit(): void {
  }
  saveRecord(){

    this.member = new Member();
    this.member.name = this.formGroup.get('name').value;
    this.member.dni = this.formGroup.get('dni').value;

    this.enviar.emit(this.member);
  }
}

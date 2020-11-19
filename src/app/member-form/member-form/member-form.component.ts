import { FormGroup } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Member } from '../../shared/classes/member';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.scss']
})
export class MemberFormComponent implements OnInit {

  @Input() formGroup: FormGroup;

  @Output() enviar = new EventEmitter<Member>();


  constructor() { }

  ngOnInit(): void {
  }
  saveRecord(){
    this.enviar.emit(this.formGroup.value);
  }
}

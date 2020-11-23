import { FormGroup } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Member } from '../../interfaces/member';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  member: Member;
  @Input() formGroup:  FormGroup;
  @Input() 'caret':    string;
  @Input() 'readonly': boolean;

  @Output() enviar = new EventEmitter<Member>();


  constructor() { }

  ngOnInit(): void {
  }
  saveRecord(){

    // this.member = new Member();
    /* this.member.name = this.formGroup.get('name').value;
    this.member.dni = this.formGroup.get('dni').value;
 */
    this.member = {
      name: this.formGroup.get('name').value,
      dni : this.formGroup.get('dni').value
    }

    this.enviar.emit(this.member);
  }
}

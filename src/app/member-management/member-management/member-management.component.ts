import { members } from './../../shared/data/members';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Member } from 'src/app/shared/interfaces/member';

@Component({
  selector: 'app-member-management',
  templateUrl: './member-management.component.html',
  styleUrls: ['./member-management.component.scss']
})
export class MemberManagementComponent implements OnInit {

  formGroup: FormGroup;
  members: Member[];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.members = members;
    /*     this.formGroup = this.fb.group({
          name:'',
          dni:''
        })
     */
    this.createForm();
  }

  createForm(member:Member = {}) {
    console.log(member);
    this.formGroup = this.fb.group({
      name: [member?.name, Validators.required],
      dni:  [member?.dni,  [Validators.required, this.validateDni.bind(this)]]
    });
  }

  reset():void{
    this.formGroup.reset();
  }

  sendToForm(member) {
    this.createForm(member);
  }

  recibir(member) {
    if (members.findIndex(e => e.dni == member.dni) == -1) {
      this.add(member);
    } else {
      this.edit(member);
    }

    this.reset();
  }

  add(member) {

    this.members.push(member);
  }

  delete(member) {

    this.members.splice(this.members.findIndex(e => e.dni == member.dni), 1)

  }

  edit(member) {
    this.members.splice(this.members.findIndex(e => e.dni == member.dni), 1, member)
  }

  private validateDni(control: AbstractControl){

    const dni = control.value;
    console.log(control.errors);
    let error = null;

    // if (control.touched || control.dirty)
    // {
    if(this.members.findIndex(e=>e.dni == dni)>=0){
    error = { ...error, 'duplicate':'duplicate dni' };
    return error;
    // }
  }
}
}

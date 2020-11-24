import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { MemberService } from './member.service';

@Injectable({
  providedIn: 'root'
})
export class MemberValidator {

  constructor(private memberService: MemberService) { }

  validateDni(control: AbstractControl){

    const dni = control.value;
    console.log(control.errors);
    let error = null;

     if (control.touched || control.dirty)
     {
/*     if(this.memberService.find(dni)){
    error = { ...error, 'duplicate':'duplicate dni' };
    return error;
     } */
  }
}


}

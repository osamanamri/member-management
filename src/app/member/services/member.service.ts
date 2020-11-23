import { Injectable } from '@angular/core';
import { members } from '../data/members';
@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor() { }

  read(){
    return members;
  }

  find(dni:string){
    return members.some(e=>e.dni == dni);
  }

  create(member){
    members.push(member);
  }


  update(member){
    members.splice(members.findIndex(e => e.dni == member.dni), 1, member);
  }

  delete(member){
    members.splice(members.findIndex(e => e.dni == member.dni), 1);
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable} from 'rxjs';
import { members } from '../data/members';
import { Member } from '../interfaces/member';
@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private members$: BehaviorSubject<Member[]> =  new BehaviorSubject<Member[]>(members);
  constructor() { }

  read$(): Observable<Member[]>{
    return this.members$;

  }

  find(dni:string){
    return members.some(e=>e.dni == dni);
  }

  create(member){
    members.push(member);
    this.members$.next(members);
  }


  update(member){
    members.splice(members.findIndex(e => e.dni == member.dni), 1, member);
    this.members$.next(members);

  }

  delete(member){
    members.splice(members.findIndex(e => e.dni == member.dni), 1);
    this.members$.next(members);

  }
}

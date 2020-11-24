import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { members } from '../data/members';
import { Member } from '../interfaces/member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  url = environment.URL;

/*   private members$: BehaviorSubject<Member[]> = new BehaviorSubject<Member[]>(members);
 */
  constructor(private http:HttpClient) { }

  read$(): Observable<Member[]>{
/*     return this.members$; */
    return this.http.get<Member[]>(this.url);
  }

  find(dni:string){
    return members.some(e=>e.dni == dni);
  }

  create$(member){
    delete member['id'];
/*     members.push(member); */
    /* this.members$.next(members); */
console.log(member);
    return this.http.post<Member>(this.url, member)
  }


  update(member){
    members.splice(members.findIndex(e => e.dni == member.dni), 1, member);
    /* this.members$.next(members); */
  }

  delete(member){
    members.splice(members.findIndex(e => e.dni == member.dni), 1);
    /* this.members$.next(members); */
  }
}

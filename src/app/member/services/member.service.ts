import { switchMap, catchError, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { members } from '../data/members';
import { Member } from '../interfaces/member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  url = environment.URL;

/*   private members$: BehaviorSubject<Member[]> = new BehaviorSubject<Member[]>(members);
 */
  private refreshToken$ = new BehaviorSubject(undefined);

  constructor(private http:HttpClient) { }

  read$(): Observable<Member[]>{
/*     return this.members$; */
    // return this.http.get<Member[]>(this.url);

    return this.refreshToken$.pipe(switchMap(()=> this.http.get<Member[]>(this.url)));
  }

  find$(member):Observable<any>{
    console.log(member);

    return this.read$().pipe(
      map(arr=> arr.map(e=>e.dni).includes(member.dni)));
    //if(member.id===null) member.id='0';
 /*   return this.http.get(this.url+'/'+member?.id) .pipe(
      catchError(error => {console.log(error)
                           return throwError(error)})) */

  }

  create$(member){
    delete member['id'];
/*     members.push(member); */
    /* this.members$.next(members); */
console.log(member);
    return this.http.post<Member>(this.url, member).subscribe(()=>this.refreshToken$.next(undefined));
  }


  update$(member){
/*     members.splice(members.findIndex(e => e.dni == member.dni), 1, member); */
    /* this.members$.next(members); */
    return this.http.put<Member>(this.url+'/'+member.id, member);

  }

  delete$(member){
/*     members.splice(members.findIndex(e => e.dni == member.dni), 1); */
    return this.http.delete<Member>(this.url+'/'+member.id, member);
    /* this.members$.next(members); */
  }
}

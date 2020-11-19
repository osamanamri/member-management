import { Member } from '../../shared/classes/member';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent implements OnInit {
@Input() members: Member[];

  constructor() { }

  ngOnInit(): void {
  }

}

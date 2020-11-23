import { Member } from '../../shared/interfaces/member';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent implements OnInit {
@Input() members: Member[];
@Output() delete = new EventEmitter<Member>();
@Output() edit = new EventEmitter<Member>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteRecord(member){
    this.delete.emit(member);
  }

  editRecord(member){
    this.edit.emit(member);
  }

}

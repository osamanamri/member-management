import { Member } from '../../interfaces/member';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
@Input() members: Member[];
@Output() erase = new EventEmitter<Member>();
@Output() edit = new EventEmitter<Member>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteRecord(member){
    this.erase.emit(member);
  }

  editRecord(member){
    this.edit.emit(member);
  }

}

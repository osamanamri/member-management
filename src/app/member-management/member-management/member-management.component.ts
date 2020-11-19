import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-member-management',
  templateUrl: './member-management.component.html',
  styleUrls: ['./member-management.component.scss']
})
export class MemberManagementComponent implements OnInit {

  formGroup: FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      name:'John',
      dni:'1234567'
    })
  }

}

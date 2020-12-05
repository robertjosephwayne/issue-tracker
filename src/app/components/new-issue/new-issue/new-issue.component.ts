import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import * as IssueActions from '../../../store/issue/issue.actions';

import { RootState } from 'src/app/store';

@Component({
  selector: 'app-new-issue',
  templateUrl: './new-issue.component.html',
  styleUrls: ['./new-issue.component.scss']
})
export class NewIssueComponent implements OnInit {
  form: FormGroup;

  constructor(
    private store: Store<RootState>,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      title: ["", Validators.required],
      description: ["", Validators.required],
      priority: ["low", Validators.required],
    });
  }

  submit(): void {
    const issue = this.form.value;
    this.store.dispatch(IssueActions.submit(issue));
  }

  ngOnInit(): void {
  }

}

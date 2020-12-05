import { createAction, props } from '@ngrx/store';
import { Issue } from './issue.state';

export const submit = createAction(
  "[Issue] Submit",
  props < { issue: Issue }>()
);

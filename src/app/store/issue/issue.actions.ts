import { createAction, props } from '@ngrx/store';
import { Issue } from './issue.state';

export const submit = createAction(
  "[Issue] Submit", (issue: Issue) => {
    return {
      issue: {
        ...issue,
        id: randomId()
      }
    };
  }
);

const randomId = () => Math.random().toString(36).substr(2, 9);

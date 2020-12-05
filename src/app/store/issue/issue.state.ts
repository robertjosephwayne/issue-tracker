export interface Issue {
  id: string;
  title: string;
  description: string;
  priority: "low" | "medium" | "high";
  resolved: boolean;
}

export interface Filter {
  text: string;
}

export interface IssueState {
  entities: Issues;
  filter: Filter;
}

export interface Issues {
  [id: string]: Issue;
}

export const initialState: IssueState = {
  entities: {},
  filter: {
    text: ""
  },
};

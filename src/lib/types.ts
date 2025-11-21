export const categoryMap = {
  "Work": "rgb(66, 135, 245)",
  "Fun": "rgb(250, 42, 81)",
  "Home": "rgb(245, 171, 244)",
}

export interface TodoSlotProps {
  title: string;
  date: string;
  category: string;
  addItem: boolean;
  important: boolean;
  done: boolean;
}

export interface CreateTaskType {
  title: string;
  date: string;
  category: string;
  important: boolean;
}

export type User = {
  id: string,
  email: string,
  username: string
}

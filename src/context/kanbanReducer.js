import { produce } from "immer";

export const kanbanReducer = produce((draft, action) => {
  const { type, payload } = action;

  switch (type) {
    default:
      break;
  }
});

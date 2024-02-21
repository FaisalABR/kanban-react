import { useContext } from "react";
import { KanbanContext } from "./KanbanContext";

export const useKanban = () => {
  const context = useContext(KanbanContext);
  const { state, dispatch } = context;

  if (context === undefined) {
    throw new Error("useKanban must be used within KanbanProvider");
  }

  const getProject = (id) => {
    return state.find((item) => item.id === id);
  };

  return { state, dispatch, getProject };
};

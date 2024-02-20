import { useContext } from "react";
import { KanbanContext } from "./KanbanContext";

export const useKanban = () => {
  const context = useContext(KanbanContext);
  const { state, dispatch } = context;

  const getProject = (id) => {
    return state.find((item) => item.id === id);
  };

  if (context === undefined) {
    throw new Error("useKanban must be used within KanbanProvider");
  }

  return { state, dispatch, getProject };
};

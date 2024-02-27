import { useContext } from "react";
import { KanbanContext } from "./KanbanContext";

export const useKanban = () => {
  const context = useContext(KanbanContext);
  const { state, dispatch } = context;
  const { projects, progress, cards, subtasks } = state;

  if (context === undefined) {
    throw new Error("useKanban must be used within KanbanProvider");
  }

  const getProject = (id) => {
    return state.find((item) => item.id === id);
  };

  const getCard = (id) => {
    return cards[id];
  };

  return {
    projects,
    progress,
    cards,
    subtasks,
    dispatch,
    getProject,
    getCard,
  };
};

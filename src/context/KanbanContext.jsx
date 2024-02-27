import { createContext, useReducer, useEffect } from "react";
import { kanbanReducer } from "./kanbanReducer";
import PropTypes from "prop-types";

export const KanbanContext = createContext(undefined);

const newState = {
  projects: {
    "project-1": {
      id: "project-1",
      projectName: "Mobile Apps Project",
      progress: ["progress-2", "progress-3", "progress-4", "progress-5"],
    },
  },
  progress: {
    "progress-2": {
      id: "progress-2",
      status: "todo",
      card: ["card-6", "card-10"],
    },
    "progress-3": {
      id: "progress-3",
      status: "in work",
      card: ["card-7"],
    },
    "progress-4": {
      id: "progress-4",
      status: "in progress",
      card: ["card-8"],
    },
    "progress-5": {
      id: "progress-5",
      status: "completed",
      card: ["card-9"],
    },
    "progress-6": {
      id: "progress-6",
      status: "completed",
      card: ["card-9"],
    },
  },
  cards: {
    "card-6": {
      id: "card-6",
      title: "Implement a low priority software very simple",
      description: "An easy software will be made quickly",
      date: "nov",
      priority: "low",
      type: "dev",
      subtask: [],
    },
    "card-7": {
      id: "card-7",
      title: "Research user preferences",
      description: "Research user prefences by their country ",
      date: "nov",
      priority: "mid",
      type: "research",
      subtask: ["subtask-1"],
    },
    "card-8": {
      id: "card-8",
      title: "Budget planning",
      description: "Budget for making a web apps",
      date: "nov",
      priority: "mid",
      type: "planning",
      subtask: ["subtask-2"],
    },
    "card-9": {
      id: "card-9",
      title: "Design UI/UX App",
      description: "Designing with Figma",
      date: "nov",
      priority: "high",
      type: "design",
      subtask: ["subtask-3"],
    },
    "card-10": {
      id: "card-10",
      title: "Implement a low priority software very simple",
      description: "An easy software will be made quickly",
      date: "nov",
      priority: "high",
      type: "research",
      subtask: ["subtask-4"],
    },
  },
  subtasks: {
    "subtask-1": {
      id: "subtask-1",
      content: "create docs",
      isDone: true,
    },
    "subtask-2": {
      id: "subtask-2",
      content: "communicate with hr",
      isDone: false,
    },
    "subtask-3": {
      id: "subtask-3",
      content: "slicing with dev",
      isDone: false,
    },
    "subtask-4": {
      id: "subtask-4",
      content: "gg",
      isDone: false,
    },
  },
};

const initializer = (initialValue = newState) =>
  JSON.parse(localStorage.getItem("data")) || initialValue;

export const KanbanProvider = ({ children }) => {
  const [state, dispatch] = useReducer(kanbanReducer, newState, initializer);

  useEffect(() => {
    console.log("data persisted on local storage", state);
    localStorage.setItem("data", JSON.stringify(state));
  }, [state]);

  return (
    <KanbanContext.Provider value={{ state, dispatch }}>
      {children}
    </KanbanContext.Provider>
  );
};

KanbanProvider.propTypes = {
  children: PropTypes.node,
};

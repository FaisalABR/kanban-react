import { createContext, useReducer } from "react";
import { kanbanReducer } from "./kanbanReducer";
import PropTypes from "prop-types";

export const KanbanContext = createContext(undefined);

const initialState = [
  {
    id: 1,
    projectName: "Mobile Apps Project",
    progress: [
      {
        id: "progress-2",
        status: "todo",
        card: [
          {
            id: "card-6",
            title: "Implement a low priority software very simple",
            description: "An easy software will be made quickly",
            date: "nov",
            priority: "low",
            type: "dev",
          },
          {
            id: "card-10",
            title: "Implement a low priority software very simple",
            description: "An easy software will be made quickly",
            date: "nov",
            priority: "low",
            type: "dev",
          },
          {
            id: "card-11",
            title: "Implement a low priority software very simple",
            description: "An easy software will be made quickly",
            date: "nov",
            priority: "low",
            type: "dev",
          },
        ],
      },
      {
        id: "progress-3",
        status: "in work",
        card: [
          {
            id: "card-7",
            title: "Research user preferences",
            description: "Research user prefences by their country ",
            date: "nov",
            priority: "mid",
            type: "research",
          },
        ],
      },
      {
        id: "progress-4",
        status: "in progress",
        card: [
          {
            id: "card-8",
            title: "Budget planning",
            description: "Budget for making a web apps",
            date: "nov",
            priority: "mid",
            type: "planning",
          },
        ],
      },
      {
        id: "progress-5",
        status: "completed",
        card: [
          {
            id: "card-9",
            title: "Design UI/UX App",
            description: "Designing with Figma",
            date: "nov",
            priority: "high",
            type: "design",
          },
        ],
      },
    ],
  },
];

export const KanbanProvider = ({ children }) => {
  const [state, dispatch] = useReducer(kanbanReducer, initialState);

  return (
    <KanbanContext.Provider value={{ state, dispatch }}>
      {children}
    </KanbanContext.Provider>
  );
};

KanbanProvider.propTypes = {
  children: PropTypes.node,
};

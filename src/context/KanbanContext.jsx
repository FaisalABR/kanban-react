import { createContext, useReducer } from "react";
import { kanbanReducer } from "./kanbanReducer";

export const KanbanContext = createContext(undefined);

const initialState = [
  {
    id: 1,
    projectName: "Mobile Apps Project",
    progress: [
      {
        id: 2,
        status: "todo",
        card: [
          {
            id: 6,
            title: "Implement a low priority software very simple",
            description: "An easy software will be made quickly",
            date: "nov",
            priority: "low",
            type: "dev",
          },
        ],
      },
      {
        id: 3,
        status: "in work",
        card: [
          {
            id: 7,
            title: "Research user preferences",
            description: "Research user prefences by their country ",
            date: "nov",
            priority: "mid",
            type: "research",
          },
        ],
      },
      {
        id: 4,
        status: "in progress",
        card: [
          {
            id: 8,
            title: "Budget planning",
            description: "Budget for making a web apps",
            date: "nov",
            priority: "mid",
            type: "planning",
          },
        ],
      },
      {
        id: 5,
        status: "completed",
        card: [
          {
            id: 9,
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

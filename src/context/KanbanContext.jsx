import { createContext, useReducer } from "react";
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
    },
    "card-7": {
      id: "card-7",
      title: "Research user preferences",
      description: "Research user prefences by their country ",
      date: "nov",
      priority: "mid",
      type: "research",
    },
    "card-8": {
      id: "card-8",
      title: "Budget planning",
      description: "Budget for making a web apps",
      date: "nov",
      priority: "mid",
      type: "planning",
    },
    "card-9": {
      id: "card-9",
      title: "Design UI/UX App",
      description: "Designing with Figma",
      date: "nov",
      priority: "high",
      type: "design",
    },
    "card-10": {
      id: "card-10",
      title: "Implement a low priority software very simple",
      description: "An easy software will be made quickly",
      date: "nov",
      priority: "high",
      type: "research",
    },
  },
};

// iterate keys project

// const initialState = [
//   {
//     id: "project-1",
//     projectName: "Mobile Apps Project",
//     progress: [
//       {
//         id: "progress-2",
//         status: "todo",
//         card: [
//           {
//             id: "card-6",
//             title: "Implement a low priority software very simple",
//             description: "An easy software will be made quickly",
//             date: "nov",
//             priority: "low",
//             type: "dev",
//           },
//           {
//             id: "card-10",
//             title: "Implement a low priority software very simple",
//             description: "An easy software will be made quickly",
//             date: "nov",
//             priority: "high",
//             type: "research",
//           },
//           {
//             id: "card-11",
//             title: "Implement a low priority software very simple",
//             description: "An easy software will be made quickly",
//             date: "nov",
//             priority: "high",
//             type: "content",
//           },
//         ],
//       },
//       {
//         id: "progress-3",
//         status: "in work",
//         card: [
//           {
//             id: "card-7",
//             title: "Research user preferences",
//             description: "Research user prefences by their country ",
//             date: "nov",
//             priority: "mid",
//             type: "research",
//           },
//         ],
//       },
//       {
//         id: "progress-4",
//         status: "in progress",
//         card: [
//           {
//             id: "card-8",
//             title: "Budget planning",
//             description: "Budget for making a web apps",
//             date: "nov",
//             priority: "mid",
//             type: "planning",
//           },
//         ],
//       },
//       {
//         id: "progress-5",
//         status: "completed",
//         card: [
//           {
//             id: "card-9",
//             title: "Design UI/UX App",
//             description: "Designing with Figma",
//             date: "nov",
//             priority: "high",
//             type: "design",
//           },
//         ],
//       },
//     ],
//   },
// ];

export const KanbanProvider = ({ children }) => {
  const [state, dispatch] = useReducer(kanbanReducer, newState);

  return (
    <KanbanContext.Provider value={{ state, dispatch }}>
      {children}
    </KanbanContext.Provider>
  );
};

KanbanProvider.propTypes = {
  children: PropTypes.node,
};

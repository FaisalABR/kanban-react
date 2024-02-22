import { produce } from "immer";
import { v4 as uuidv4 } from "uuid";

export const kanbanReducer = produce((draft, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_CARD":
      {
        const project = draft.find((item) => item.id === payload.projectId);
        const progress = project.progress.find(
          (item) => item.id === payload.progressId
        );
        progress.card.push({
          id: uuidv4(),
          title: payload.title,
          description: payload.description,
          date: payload.date,
          priority: payload.priority,
          type: payload.type,
        });
      }
      break;
    case "DELETE_CARD":
      {
        const project = draft.find((item) => item.id === payload.projectId);
        const progress = project.progress.find(
          (item) => item.id === payload.progressId
        );
        progress.card.splice(payload.index, 1);
      }
      break;
    case "ADD_PROJECT":
      draft.push({
        id: uuidv4(),
        projectName: payload.projectName,
        progress: [
          {
            id: uuidv4(),
            status: "todo",
            card: [],
          },
          {
            id: uuidv4(),
            status: "in work",
            card: [],
          },
          {
            id: uuidv4(),
            status: "in progress",
            card: [],
          },
          {
            id: uuidv4(),
            status: "completed",
            card: [],
          },
        ],
      });
      break;
    case "BETWEEN_PROGRESS":
      {
        const project = draft.find((item) => item.id === payload.projectId);
        const progressStart = project.progress.find(
          (item) => item.id === payload.startId
        );

        const progressFinish = project.progress.find(
          (item) => item.id === payload.finishId
        );
        progressStart.card = payload.newStart;
        progressFinish.card = payload.newFinish;
      }

      break;
    case "REORDERING":
      {
        const project = draft.find((item) => item.id === payload.projectId);
        const progress = project.progress.find(
          (item) => item.id === payload.progressId
        );

        progress.card = payload.task;
      }
      break;
    default:
  }
});

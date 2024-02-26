import { produce } from "immer";
import { v4 as uuidv4 } from "uuid";

export const kanbanReducer = produce((draft, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_CARD":
      {
        const cardId = uuidv4();
        const data = {
          id: cardId,
          title: payload.title,
          description: payload.description,
          date: payload.date,
          priority: payload.priority,
          type: payload.type,
          subtask: [],
        };
        draft.progress[payload.progressId].card.push(cardId);

        draft.cards[cardId] = data;
      }
      break;
    case "DELETE_CARD":
      {
        draft.progress[payload.progressId].card.splice(payload.index, 1);
        delete draft.cards[payload.cardId];
      }
      break;
    case "ADD_SUBTASK":
      {
        const id = uuidv4();
        draft.cards[payload.cardId].subtask.push(id);
        draft.subtasks[id] = {
          id,
          content: payload.content,
          isDone: false,
        };
      }
      break;
    case "COMPLETED_SUBTASK":
      draft.subtasks[payload.subtaskId].isDone = payload.condition;
      break;
    case "ADD_PROJECT":
      {
        const projectId = uuidv4();
        // progressIds contains different uuids for each progress status [todo id, in work id, in progress id, completed id]
        const progressIds = [uuidv4(), uuidv4(), uuidv4(), uuidv4()];
        const progressStatus = ["todo", "in work", "in progress", "completed"];
        draft.projects[projectId] = {
          id: projectId,
          projectName: payload.projectName,
          progress: progressIds,
        };

        progressIds.map((item, i) => {
          return (draft.progress[item] = {
            id: item,
            status: progressStatus[i],
            card: [],
          });
        });
      }
      break;
    case "BETWEEN_PROGRESS":
      {
        const progressStart = draft.progress[payload.startId];
        const progressFinish = draft.progress[payload.finishId];
        progressStart.card = payload.newStart;
        progressFinish.card = payload.newFinish;
      }
      break;
    case "REORDER_TASK":
      {
        draft.progress[payload.progressId].card = payload.task;
      }
      break;
    case "REORDER_SUBTASK":
      {
        draft.cards[payload.cardId].subtask = payload.task;
      }
      break;
    default:
  }
});

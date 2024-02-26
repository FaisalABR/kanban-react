export const addSubtask = (content, cardId) => {
  return {
    type: "ADD_SUBTASK",
    payload: { content, cardId },
  };
};

export const completeSubtask = (subtaskId, condition) => {
  return {
    type: "COMPLETED_SUBTASK",
    payload: { subtaskId, condition },
  };
};

export const reorderTask = (task, progressId) => {
  return {
    type: "REORDER_TASK",
    payload: { task, progressId },
  };
};

export const reorderSubTask = (task, cardId) => {
  return {
    type: "REORDER_SUBTASK",
    payload: { task, cardId },
  };
};

export const moveBetween = (newStart, newFinish, startId, finishId) => {
  return {
    type: "BETWEEN_PROGRESS",
    payload: { newStart, newFinish, startId, finishId },
  };
};

export const addProject = (projectName) => {
  return {
    type: "ADD_PROJECT",
    payload: {
      projectName,
    },
  };
};

export const addCard = (
  progressId,
  { title, description, date, priority, type }
) => {
  return {
    type: "ADD_CARD",
    payload: {
      progressId,
      title,
      description,
      date,
      priority,
      type,
    },
  };
};

export const deleteCard = (progressId, cardId, index) => {
  return {
    type: "DELETE_CARD",
    payload: {
      progressId,
      cardId,
      index,
    },
  };
};

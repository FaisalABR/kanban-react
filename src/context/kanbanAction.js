export const reorderTask = (task, progressId) => {
  return {
    type: "REORDERING",
    payload: { task, progressId },
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
  title,
  description,
  date,
  priority,
  type
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

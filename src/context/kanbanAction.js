export const reorderTask = (task, projectId, progressId) => {
  return {
    type: "REORDERING",
    payload: { task, projectId, progressId },
  };
};

export const moveBetween = (
  newStart,
  newFinish,
  projectId,
  startId,
  finishId
) => {
  return {
    type: "BETWEEN_PROGRESS",
    payload: { newStart, newFinish, projectId, startId, finishId },
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
  projectId,
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
      projectId,
      progressId,
      title,
      description,
      date,
      priority,
      type,
    },
  };
};

export const deleteCard = (projectId, progressId, index) => {
  return {
    type: "DELETE_CARD",
    payload: {
      projectId,
      progressId,
      index,
    },
  };
};

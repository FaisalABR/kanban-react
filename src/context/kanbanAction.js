export const reorderTask = (task, projectId, progressId) => {
  return {
    type: "REORDERING",
    payload: { task, projectId, progressId },
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

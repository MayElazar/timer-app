//action- what  i want to do
export const addTask = (id, title, min, sec, hours) => {
  return {
    type: "ADD_TASK",
    payload: {
      id,
      title,
      min,
      sec,
      hours,
      isPaused: true,
    },
  };
};

export const pauseTask = (id, min, sec, hours) => {
  return {
    type: "PAUSE_TASK",
    payload: {
      id,
      min,
      sec,
      hours,
      isPaused: true,
    },
  };
};

export const pauseALLTasks = (id, min, sec, hours) => {
  return {
    type: "PAUSE_ALL_TASKS",
    payload: {
      id,
      min,
      sec,
      hours,
      isPaused: true,
    },
  };
};

export const resumeTask = (id, min, sec, hours) => {
  return {
    type: "RESUME_TASK",
    payload: {
      id,
      min,
      sec,
      hours,
      isPaused: false,
    },
  };
};

export const deleteTask = (id) => {
  return {
    type: "DELETE_TASK",
    payload: {
      id,
    },
  };
};

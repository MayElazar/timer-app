//action- what  i want to do
export const addTask = (id, title, startTime) => {
  return {
    type: "ADD_TASK",
    payload: {
      id,
      title,
      startTime,

      isPaused: true,
    },
  };
};

export const pauseTask = (id, pauseTime) => {
  return {
    type: "PAUSE_TASK",
    payload: {
      id,

      isPaused: true,
    },
  };
};

export const pauseALLTasks = (id, startTime) => {
  return {
    type: "PAUSE_ALL_TASKS",
    payload: {
      id,
      startTime,
      isPaused: true,
    },
  };
};

export const resumeTask = (id) => {
  return {
    type: "RESUME_TASK",
    payload: {
      id,
      isPaused: false,
    },
  };
};

export const startTimer = (time) => {
  return {
    type: "START_TIME",
    payload: {
      time,
      isPaused: false,
    },
  };
};


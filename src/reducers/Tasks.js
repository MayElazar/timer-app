//reducer - modify mt store.

const tasks = (state = { Tasks: [] }, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        Tasks: [action.payload, ...state.Tasks],
      };
    case "PAUSE_ALL_TASKS":
      return {
        ...state,
        Tasks: state.Tasks.map((task) => {
          return {
            ...task,
            isPaused: action.payload.isPaused,
            //pausingTime: action.payload.time,
          };
        }),
      };
    case "PAUSE_TASK":
      return {
        ...state,
        Tasks: state.Tasks.map((task) => {
          if (task.id === action.payload.id) {
            return {
              ...task,
              isPaused: true,
              pausingTime: action.payload.time,
            };
          } else {
            return task;
          }
        }),
      };
    case "RESUME_TASK":
      return {
        ...state,
        Tasks: state.Tasks.map((task) => {
          if (task.id === action.payload.id) {
            return {
              ...task,
              isPaused: false,
            };
          } else {
            return task;
          }
        }),
      };

    default:
      return state;
  }
};

export default tasks;

import { useSelector, useDispatch } from "react-redux";
import { pauseTask } from "../actions";
import { resumeTask } from "../actions";
import { pauseALLTasks } from "../actions";

import TaskTimer from "./Timer";

export default function TasksList() {
  const dispatch = useDispatch();

  const tasks = useSelector((state) => state.tasks);

  const SetTimer = (id) => {
    // console.log(tasks.Task);

    tasks.Tasks.map((task) => {
      if (task.id === id) {
        if (!task.isPaused) {
          dispatch(pauseTask(id, Date.now()));
        } else {
          dispatch(pauseALLTasks(task.id));
          dispatch(resumeTask(id, Date.now()));
        }

        return "";
      }
      return console.log("bye");
    });
  };

  return (
    <div className="listConteiner">
      <ul>
        {console.log(tasks.Tasks.length)}
        {tasks.Tasks.length > 0 &&
          tasks.Tasks.map(
            (task) => (
              <li key={task.id}>
                {task.title}
                <TaskTimer
                  startTime={task.startTime}
                  isPaused={task.isPaused}
                />

                <button className="btn-sec" onClick={() => SetTimer(task.id)}>
                  {" "}
                  {task.isPaused === false ? "Stop" : "Play"}
                </button>
              </li>
            )
            //console.log(task.title)
          )}
      </ul>
    </div>
  );
}

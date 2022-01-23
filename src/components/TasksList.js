import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay, faTrash } from "@fortawesome/free-solid-svg-icons";

import { useSelector, useDispatch } from "react-redux";
import { pauseTask } from "../actions";
import { resumeTask } from "../actions";
import { pauseALLTasks } from "../actions";
import { deleteTask } from "../actions";
import { TaskTimer } from "./Timer";
import TotalTime from "./TotalTime";

export default function TasksList() {
  const dispatch = useDispatch();

  const tasks = useSelector((state) => state.tasks);

  const SetTimer = (id) => {
    tasks.Tasks.map((task) => {
      if (task.id === id) {
        if (!task.isPaused) {
          dispatch(pauseTask(id, task.min, task.sec, task.hours));
        } else {
          dispatch(pauseALLTasks(task.id));
          dispatch(resumeTask(id, task.min, task.sec, task.hours));
          console.log(task.hours);
        }

        return "";
      }
      return "";
    });
  };

  const DeleteItem = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div className="listConteiner">
      <ul>
        {tasks.Tasks.length > 0 &&
          tasks.Tasks.map((task) => (
            <li key={task.id}>
              {task.title}
              <span>
                <TaskTimer
                  id={task.id}
                  isPaused={task.isPaused}
                  min={task.min}
                  sec={task.sec}
                  hours={task.hours}
                />
              </span>
              <button className="btn-sec" onClick={() => SetTimer(task.id)}>
                {task.isPaused === false ? (
                  <FontAwesomeIcon icon={faPause} color="#b76ef0" size="lg" />
                ) : (
                  <FontAwesomeIcon icon={faPlay} color="#b76ef0" size="lg" />
                )}
              </button>
              <button className="btn-sec" onClick={() => DeleteItem(task.id)}>
                <FontAwesomeIcon icon={faTrash} color="#EE5E90" size="lg" />
              </button>
            </li>
          ))}
      </ul>
      <TotalTime tasks={tasks.Tasks} />
    </div>
  );
}

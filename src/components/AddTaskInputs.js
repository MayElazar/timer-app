import { useState } from "react";
import uuid from "react-uuid";
import { useSelector, useDispatch } from "react-redux";
import { addTask } from "../actions";
import { pauseALLTasks } from "../actions";

export default function AddTaskInputs() {
  const [TaskTitle, setTaskTitle] = useState("");
  const dispatch = useDispatch();

  const tasks = useSelector((state) => state.tasks);

  const addItem = () => {
    if (TaskTitle !== "") {
      return (
        tasks.Tasks.length > 0 &&
          dispatch(
            pauseALLTasks(
              tasks.Tasks.map((task) => task.id),
              Date.now()
            )
          ),
        dispatch(addTask(uuid(), TaskTitle, Date.now())),
        setTaskTitle("")
      );
    }
  };
  return (
    <div>
      {console.log(tasks)}
      <input
        type="text"
        value={TaskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
      />
      <button className="btn-p" onClick={addItem}>
        + Add Task
      </button>
    </div>
  );
}

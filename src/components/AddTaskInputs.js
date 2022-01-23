import { useState } from "react";
import uuid from "react-uuid";
import { useSelector, useDispatch } from "react-redux";
import { addTask } from "../actions";
import { pauseALLTasks } from "../actions";

export default function AddTaskInputs() {
  // FetchData();
  const [TaskTitle, setTaskTitle] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  let tasks = useSelector((state) => state.tasks);

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
        dispatch(addTask(uuid(), TaskTitle, 0, 0, 0)),
        setTaskTitle(""),
        setError("")
      );
    } else {
      setError("Please Type a task Title");
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
      <p>{error}</p>
    </div>
  );
}

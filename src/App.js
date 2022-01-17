import "./App.css";

//components
import AddTaskInputs from "./components/AddTaskInputs";
import TasksList from "./components/TasksList";

function App() {
  return (
    <div className="App">
      <AddTaskInputs />
      <TasksList />
    </div>
  );
}

export default App;

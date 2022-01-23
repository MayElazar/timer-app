import "./App.css";
//import store from "./hooks/useLocalStorage";
//components

import AddTaskInputs from "./components/AddTaskInputs";

import TasksList from "./components/TasksList";

function App() {
  return (
    <div className="App">
      <h1>Today's Tasks</h1>
      <AddTaskInputs />
      <TasksList />
    </div>
  );
}

export default App;

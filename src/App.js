import Hello from "./pages/hello/Hello";
import TaskPage from "./pages/taskpage/TaskPage";

function App() {
  let intructions = ["Enter the task title", "Click on  add task"];
  return (
    <div className="App">
      <Hello intruction={intructions} />
      <TaskPage />
    </div>
  );
}

export default App;

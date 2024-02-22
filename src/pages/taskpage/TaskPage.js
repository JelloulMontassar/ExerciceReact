import TaskForm from "../taskform/TaskForm";
import TaskList from "../tasklist/TaskList";

function TaskPage() {
  let todos = [
    {
      _id: 1,
      title: "REACT",
      duration: 12,
      details: { level: "Basic", date: "12-12-2023" },
    },
    {
      _id: 2,
      title: "PHP",
      duration: 5,
      details: { level: "IT", date: "12-10-2023" },
    },
    {
      _id: 3,
      title: "CSS",
      duration: 7,
      details: { level: "IT", date: "12-11-2023" },
    },
  ];
  return (
    <div>
      <TaskForm />
      <TaskList todo={todos} />
    </div>
  );
}

export default TaskPage;

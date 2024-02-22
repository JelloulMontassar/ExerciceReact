import Task from "../task/Task";

function TaskList(props) {
  const tasks = props.todo;
  const listItems = tasks.map((i) => (
    <Task
      key={i._id}
      title={i.title}
      details={i.details}
      duration={i.duration}
    />
  ));
  return <div>{listItems}</div>;
}

export default TaskList;

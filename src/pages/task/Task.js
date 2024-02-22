import "./Task.css";
function Task(props) {
  console.log(props);
  return (
    <div className="Task">
      <div class="task">
        <div class="title">{props.title}</div>
        <div class="title">{props.duration}</div>
        {props.details && (
          <div class="title">
            {props.details.level} ({props.details.date})
          </div>
        )}
        <div class="actions">
          <span>delete</span>

          <span>update</span>
        </div>
      </div>
    </div>
  );
}
export default Task;

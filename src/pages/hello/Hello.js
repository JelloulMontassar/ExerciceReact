function Hello(props) {
  const intructions = props.intruction;
  const listItems = intructions.map((i) => <li>{i}</li>);
  return (
    <div>
      <p>To add a Task</p>
      <ul>{listItems}</ul>
    </div>
  );
}

export default Hello;

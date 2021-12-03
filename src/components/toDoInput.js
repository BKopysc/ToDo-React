export default function ToDoInput(props) {
  return (
    <input
      type="text"
      placeholder="Type your todo here!"
      onKeyPress={(evt) => {
        props.onAddTask(evt);
      }}
    />
  );
}

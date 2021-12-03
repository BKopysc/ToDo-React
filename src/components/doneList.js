import styles from "../styles";

export default function ToDoList(props) {
  return (
    <div className="toDoList">
      <h3 style={styles.h3Style}>Done</h3>
      <ul style={styles.ulStyle}>
        {props.doneList.map((elem, idx) => (
          <li key={idx}>
            <input
              type="checkbox"
              defaultChecked
              onChange={() => {
                props.onMoveToToDo(elem, idx);
              }}
            />
            {elem}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}

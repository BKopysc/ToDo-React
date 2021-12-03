import styles from "../styles";

export default function ToDoList(props) {
  return (
    <div className="toDoList">
      <h3 style={styles.h3Style}>To do</h3>
      <ul style={styles.ulStyle}>
        {props.toDoList.map((elem, idx) => (
          <li key={idx}>
            <input
              type="checkbox"
              onInput={() => {
                props.onMoveToDone(elem, idx);
              }}
            />
            {elem}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}

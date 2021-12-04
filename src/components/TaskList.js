import styles from "../styles";

export default function TaskList(props) {
  return (
    <div className={props.name}>
      <h3 style={styles.h3Style}>{props.title}</h3>
      <ul style={styles.ulStyle}>
        {props.itemList.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              defaultChecked={props.isChecked}
              onChange={() => {
                props.onMoveToAnotherList(item);
              }}
            />
            {item.text}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}

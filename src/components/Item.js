import "./Item.css";
export default function Item(props) {
  const { data, deleteTask , editTask } = props;
  return (
    <div className="list-item">
      <p className="title">{data.title}</p>
      <div className="button-container">
        <button className="btn" onClick={() => deleteTask(data.id)}>
          ลบ
        </button>
        <button className="btn" onClick={() => editTask(data.id)}>แก้ไข</button>
      </div>
    </div>
  );
}

const TaskItem = ({ task, onComplete, onDelete }) => {
  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button onClick={() => onComplete(task.id)}>
        Marcar como completada
      </button>
      <button onClick={() => onDelete(task.id)}>Eliminar</button>
    </div>
  );
};

export default TaskItem;

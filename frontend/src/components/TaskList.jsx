import { useEffect, useState } from "react";
import { fetchTasks, updateTask, deleteTask } from "../services/api";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      try {
        const data = await fetchTasks();
        setTasks(data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
    getTasks();
  }, []);

  const handleComplete = async (id) => {
    await updateTask(id, { completed: true });
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: true } : task
    );
    setTasks(updatedTasks);
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  return (
    <div>
      <h2>Mis Tareas</h2>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onComplete={handleComplete}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default TaskList;

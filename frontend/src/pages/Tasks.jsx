import { useState } from "react";
import { createTask } from "../services/api";
import TaskList from "../components/TaskList";

const Tasks = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createTask({ title, description, completed: false });
      setTitle("");
      setDescription("");
      alert("Tarea creada exitosamente");
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  return (
    <div>
      <h1>Gestión de Tareas</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Descripción"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Crear Tarea</button>
      </form>
      <TaskList />
    </div>
  );
};

export default Tasks;

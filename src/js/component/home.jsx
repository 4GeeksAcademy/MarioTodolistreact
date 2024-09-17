import React, { useState } from "react";
function Home() {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);
  
    // Agregar nueva tarea
    const addTask = (e) => {
      if (e.key === "Enter" && task.trim() !== "") {
        setTasks([...tasks, task]);
        setTask(""); // Limpiar input después de agregar tarea
      }
    };
  
    // Eliminar tarea
    const deleteTask = (index) => {
      const newTasks = tasks.filter((_, i) => i !== index);
      setTasks(newTasks);
    };
  
    return (
      <div className="todo-container">

        <h1>TO-DO</h1>
        <input
          type="text"
          placeholder="Agregar una tarea"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={addTask} // Agregar tarea al presionar Enter
        />
        <ul>
          {tasks.map((t, index) => (
            <li key={index}>
              {t}
              <span className="delete-btn" onClick={() => deleteTask(index)}>
                ❌
              </span>
            </li>
          ))}
        </ul>
        {tasks.length === 0 && <p>No hay tareas, agregar tareas.</p>}
      </div>
    );
  }
export default Home;


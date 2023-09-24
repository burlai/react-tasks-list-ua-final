import { useState } from "react";

export function TasksForm({ onSubmit }) {
  const [newTask, setNewTask] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (newTask === "") return;

    onSubmit(newTask);
    setNewTask("");
  }

  return (
    <form onSubmit={handleSubmit} className="to-do-form">
      <div className="form-row">
        <input
          placeholder="нова задача"
          value={newTask}
          onChange={(event) => setNewTask(event.target.value)}
          type="text"
          id="item"
        />
      </div>
      <button className="button">Додати</button>
    </form>
  );
}

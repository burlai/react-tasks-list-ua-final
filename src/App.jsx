import { useEffect, useState } from "react";
import { TasksForm } from "./TasksForm";
import "./index.css";
import { TasksList } from "./TasksList";

export default function App() {
  const [tasks, setTasks] = useState(() => {
    const sessionStorageTasks = sessionStorage.getItem("localTasks");
    if (sessionStorageTasks == null) return [];

    return JSON.parse(sessionStorageTasks);
  });

  useEffect(() => {
    sessionStorage.setItem("localTasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title) => {
    setTasks((currentTasks) => {
      return [
        ...currentTasks,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  };

  const toggleTask = (id, completed) => {
    setTasks((currentTasks) => {
      return currentTasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed };
        }

        return task;
      });
    });
  };

  const deleteTask = (id) => {
    setTasks((currentTasks) => {
      return currentTasks.filter((task) => task.id !== id);
    });
  };

  return (
    <>
      <h1 className="header">Задачі на сьогодні</h1>
      <TasksForm onSubmit={addTask} />
      <TasksList
        tasks={tasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
      />
    </>
  );
}

import { TaskItem } from "./TaskItem";

export function TasksList({ tasks, toggleTask, deleteTask }) {
  return (
    <ul className="to-do-list">
      {tasks.length === 0 && "Додай першу задачу"}
      {tasks.map((task) => {
        return (
          <TaskItem
            {...task}
            key={task.id}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
        );
      })}
    </ul>
  );
}

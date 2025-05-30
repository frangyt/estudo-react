import NewTask from "./NewTask";

export default function Tasks({ tasks, onDeleteTask, onToggleTask }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask />
      {tasks.length === 0 ? (
        <p className="text-stone-800 my-4"> This project does not have any tasks yet</p>
      ) : (
        <ul>
          {tasks.maps((task) => (
            <li key={task.id}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggleTask(task.id)}
              />
              <span className={task.completed ? "line-through" : ""}>
                {task.title}
              </span>
              <button onClick={() => onDeleteTask(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

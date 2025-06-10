import NewTask from "./NewTask";

export default function Tasks({ tasks, onDelete, onAdd, projectId }) {
  // Filter tasks by projectId
  const filteredTasks = tasks.filter((task) => task.projectId === projectId);
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAdd={onAdd} />
      {filteredTasks.length === 0 ? (
        <p className="text-stone-800 my-4">
          {" "}
          This project does not have any tasks yet
        </p>
      ) : (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {filteredTasks.map((task) => (
            <li key={task.id} className="flex justify-between my-4">
              <span className="">{task.text}</span>
              <button
                className="text-stone-700 hover:text-red-500"
                onClick={() => onDelete(task.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

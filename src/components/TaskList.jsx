import { useContext } from "react";
import TaskContext from "../context/TaskContext";

function TaskList() {
  const { tasks, toggleTask, deleteTask } = useContext(TaskContext);

  if (!tasks || tasks.length === 0) {
    return <p className="text-center mt-4 text-gray-500">No tasks yet</p>;
  }

  return (
    <div className="mt-4 space-y-2">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="p-3 border rounded-lg bg-gray-50 flex justify-between items-center"
        >
        
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
              className="w-4 h-4"
            />
            <span className={task.completed ? "line-through text-gray-400" : ""}>
              {task.title}
            </span>
          </div>

          {/* Right side: delete button */}
          <button
            onClick={() => deleteTask(task.id)}
            className="text-red-500 font-bold px-2 py-1 hover:bg-red-100 rounded"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default TaskList;

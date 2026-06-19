function TaskList({ tasks = [], deleteTask, toggleComplete }) {
  if (tasks.length === 0) {
    return (
      <div className="card">
        <h3>No Tasks Found 📭</h3>
        <p>Add a task to get started!</p>
      </div>
    );
  }

  return (
    <div>
      {tasks.map((task) => {
        const priorityClass = `priority ${
          task.priority
            ? task.priority.toLowerCase()
            : ""
        }`;

        return (
          <div
            className={`task ${
              task.completed ? "completed" : ""
            }`}
            key={task.id}
          >
            <div>
              <h4>{task.title}</h4>

              <div>
                <small>{task.category}</small>

                <span className={priorityClass}>
                  {task.priority}
                </span>
              </div>

              {task.dueDate && (
                <p
                  style={{
                    marginTop: "8px",
                    fontSize: "14px",
                    color: "#64748b",
                  }}
                >
                  📅 Due: {task.dueDate}
                </p>
              )}
            </div>

            <div className="task-actions">
              <button
                onClick={() =>
                  toggleComplete(task.id)
                }
              >
                {task.completed
                  ? "Undo"
                  : "Done"}
              </button>

              <button
                onClick={() =>
                  deleteTask(task.id)
                }
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TaskList;
function Streak({ tasks }) {
  const completed = tasks.filter(
    (task) => task.completed
  ).length;

  return (
    <div className="card streak-card">
      <h3>🔥 Study Streak</h3>

      <p>{completed}</p>

      <small>
        Completed Tasks
      </small>
    </div>
  );
}

export default Streak;
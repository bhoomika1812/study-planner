function ProgressBar({ tasks }) {
  const completed = tasks.filter(
    (task) => task.completed
  ).length;

  const percent =
    tasks.length === 0
      ? 0
      : Math.round(
          (completed / tasks.length) * 100
        );

  return (
    <div>
      <h3>
        Progress: {completed}/{tasks.length} Tasks ({percent}%)
      </h3>

      <div className="progress">
        <div
          className="progress-fill"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;
function Dashboard({ tasks }) {
  const completed = tasks.filter(
    (task) => task.completed
  ).length;

  const pending = tasks.length - completed;

  return (
    <div className="dashboard">
      <div className="card">
        <h3>Total Tasks</h3>
        <p>{tasks.length}</p>
      </div>

      <div className="card">
        <h3>Completed</h3>
        <p>{completed}</p>
      </div>

      <div className="card">
        <h3>Pending</h3>
        <p>{pending}</p>
      </div>
      </div>
  );
}

export default Dashboard;
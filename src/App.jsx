import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Pomodoro from "./components/Pomodoro";
import ProgressBar from "./components/ProgressBar";
import Streak from "./components/Streak";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  // States
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  });

  const [darkMode, setDarkMode] = useState(false);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  // Save tasks to localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Add task
  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== id)
    );
  };

  // Complete / Undo task
  const toggleComplete = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  // Search + Filter
  const filteredTasks = tasks
    .filter((task) =>
      task.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter((task) => {
      if (filter === "Completed") return task.completed;
      if (filter === "Pending") return !task.completed;
      return true;
    });

  return (
    <div className={darkMode ? "dark app" : "app"}>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <div className="container">
        <Dashboard tasks={tasks} />

        <Streak tasks={tasks} />

        <div className="search-filter">
  <input
    className="search"
    placeholder="🔍 Search task..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />

  <select
    className="filter"
    value={filter}
    onChange={(e) => setFilter(e.target.value)}
  >
    <option value="All">All Tasks</option>
    <option value="Completed">Completed</option>
    <option value="Pending">Pending</option>
  </select>
</div>

        <TaskForm addTask={addTask} />

        <ProgressBar tasks={tasks} />

        <TaskList
          tasks={filteredTasks}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
        />

        <Pomodoro />
        <Footer />
      </div>
    </div>
  );
}

export default App;
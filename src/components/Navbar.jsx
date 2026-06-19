function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="navbar">
      <div>
        <h1>🎓 Study Planner</h1>
        <p className="tagline">
          Organize • Focus • Achieve
        </p>
      </div>

      <button
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
      </button>
    </nav>
  );
}

export default Navbar;
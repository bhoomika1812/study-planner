# 📚 Study Planner

A clean, fast study planner built with React + Vite to help you organize tasks, track progress, and stay focused with a built-in Pomodoro timer.

**🔗 Live demo:** https://bhoomika1812.github.io/study-planner/

## ✨ Features

- **Task management** — add, complete, and delete study tasks
- **Search & filter** — quickly find tasks by name, or filter by All / Completed / Pending
- **Dashboard** — at-a-glance stats for total, completed, and pending tasks
- **Progress bar** — visual completion percentage
- **Study streak** — tracks how many tasks you've completed
- **Pomodoro timer** — 25-minute focus sessions with 5-minute and 15-minute break options
- **Dark mode** — toggle from the navbar
- **Persistent storage** — tasks are saved to `localStorage`, so they survive a page refresh

## 🛠 Tech Stack

- [React 19](https://react.dev/)
- [Vite](https://vite.dev/)
- ESLint for linting
- Deployed with [gh-pages](https://www.npmjs.com/package/gh-pages) on GitHub Pages

## 🚀 Getting Started

```bash
# clone the repo
git clone https://github.com/bhoomika1812/study-planner.git
cd study-planner

# install dependencies
npm install

# start the dev server
npm run dev
```

The app will be available at `http://localhost:5173`.

## 📦 Build & Deploy

```bash
# production build
npm run build

# deploy to GitHub Pages
npm run deploy
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx       # Header with dark mode toggle
│   ├── Dashboard.jsx     # Task stats overview
│   ├── Streak.jsx        # Study streak counter
│   ├── TaskForm.jsx      # Add new tasks
│   ├── TaskList.jsx      # List of tasks with complete/delete actions
│   ├── ProgressBar.jsx   # Completion progress visualization
│   ├── Pomodoro.jsx      # Pomodoro focus timer
│   └── Footer.jsx
├── App.jsx
└── main.jsx
```

## 📄 License

This project is open source and available for personal and educational use.

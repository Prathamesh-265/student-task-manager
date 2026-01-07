
# Student Task Manager

A modern, full-stack task management application with React frontend and Node.js backend running on a single port.

## Features

- ✨ Create, read, update, and delete tasks
- 🏷️ Task prioritization (Low, Medium, High)
- 📅 Due date assignment
- ✅ Mark tasks as completed
- 🔍 Filter tasks (All, Pending, Completed)
- 📊 Task statistics and counters

## Tech Stack

- **Frontend:** React 19, Vite, react-icons
- **Backend:** Node.js, Express
- **Database:** MongoDB Atlas
- **Styling:** CSS3 with custom properties (variables)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB Atlas account with connection URI

### Installation

1. **Install root dependencies:**
   ```bash
   npm install
   ```

2. **Install client dependencies and build:**
   ```bash
   cd client
   npm install
   npm run build
   cd ..
   ```

3. **Configure environment:**
   Create a `.env` file in the root directory:
   ```
   MONGO_URI=your_mongodb_connection_uri
   ```

4. **Start the server:**
   ```bash
   npm run start
   ```

5. **Open in browser:**
   Navigate to [http://localhost:5000](http://localhost:5000)

## Project Structure

```
student-task-manager-single-port/
├── client/
│   ├── src/
│   │   ├── components/        # Modular React components
│   │   ├── layouts/           # Layout wrapper components
│   │   ├── styles/            # Global CSS and design tokens
│   │   ├── App.jsx            # Main application component
│   │   └── main.jsx           # Application entry point
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
├── server/
│   ├── config/                # Database configuration
│   ├── models/                # MongoDB data models
│   ├── routes/                # API routes
│   ├── server.js              # Express server setup
│   └── package.json
├── .env                       # Environment variables
└── package.json
```

## Architecture

**Frontend:** Modular component-based architecture with centralized state management in App.jsx.

**Backend:** Single-port architecture serving the built frontend as static files on port 5000, with `/api` routes for task operations.

## Available Commands

- `npm run start` - Start the server (from root)
- `npm run build` - Build frontend (from client directory)
- `npm run dev` - Development mode with Vite (from client directory)

## Notes

⚠️ Both frontend and backend run on **a single port (5000)** - no need for multiple servers.

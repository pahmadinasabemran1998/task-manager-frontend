# Task Manager Frontend

A modern **React + Vite** frontend for a Task Management application. It allows users to register, log in, and manage their tasks with a dynamic and responsive interface. The frontend communicates with a secure backend API built with Node.js, Express, and MongoDB.

## Features

- **User Authentication**: Register, login, and maintain session using JWT tokens.
- **Task Management**: Add, edit, and update tasks with details like title, category, deadline, and status.
- **Dynamic Filtering**: Filter tasks by status (`In Progress`, `Completed`, `Overdue`) or category (`Work`, `Personal`, `Study`, `Other`).
- **Automatic Status Updates**: Tasks past their deadline are automatically marked as `Overdue`.
- **Responsive UI**: Loading states, empty state messages, and smooth updates without page reloads.
- **Integration with Backend**: Communicates securely with the [Task Manager Backend](https://github.com/pahmadinasabemran1998/task-manager-backend) API.

## Tech Stack

- **Frontend**: React, Vite, JavaScript, Vanilla CSS
- **State Management**: React Context API
- **API Calls**: Axios
- **Routing**: React Router

## Setup & Running

1. Clone the repository:

```bash
git clone https://github.com/pahmadinasabemran1998/task-manager-frontend.git
```
2. Navigate to the project folder:
```bash
cd task-manager-frontend
```
3. Install dependencies:
```bash
npm install
```
4. Create a .env file with your backend API URL:
```bash
VITE_API_URL=http://localhost:5000/api
```
5. Start the development server:
```bash
npm run dev
```
6. Open your browser at the provided local URL (e.g., http://localhost:5173) to view the app.

## Backend Reference:
1. This frontend is designed to work with the Task Manager Backend: [Task Manager Backend](https://github.com/pahmadinasabemran1998/task-manager-backend).
2. Make sure the backend is running and accessible at the URL specified in .env.

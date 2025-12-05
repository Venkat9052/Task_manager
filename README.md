# Task__manager
📌 Task Manager – Full Stack Project

A simple and efficient Task Manager application built using React (Frontend) and Node.js + Express + MongoDB (Backend).
This project allows users to create, edit, update, delete, and manage tasks with a clean UI and smooth workflow.

🚀 Features
✔ Frontend (React)

Add new tasks

Edit existing tasks

Delete tasks

Responsive UI

Modern design using Tailwind CSS

Axios for API communication

✔ Backend (Node.js + Express)

REST API for tasks

CRUD operations

MongoDB database using Mongoose

Proper error handling

CORS enabled

📁 Project Structure
Task_manager/
│
├── frontend/        # React UI
│   ├── src/
│   ├── public/
│   └── package.json
│
└── backend/         # Node.js + Express API
    ├── models/
    ├── routes/
    ├── server.js
    └── package.json

⚙️ Tech Stack
Frontend

React

Tailwind CSS

Axios

JavaScript / JSX

Backend

Node.js

Express.js

MongoDB

Mongoose

📦 Installation & Setup
🔹 1. Clone the repository
git clone https://github.com/Venkat9052/Task_manager.git
cd Task_manager

🖥️ Frontend Setup
cd frontend
npm install
npm start


Frontend will start on:
👉 http://localhost:5173

🛠️ Backend Setup
cd backend
npm install
npm start


Backend will start on:
👉 http://localhost:9000

🔗 API Endpoints
POST /add

Add a new task

GET /alltasks

Fetch all tasks

PUT /update/:id

Update a task by ID

DELETE /delete/:id

Delete a task by ID

🧪 Example Task Object
{
  "_id": "123456789",
  "action": "complete homework"
}

📸 Screenshots

Add your project screenshots here (UI screenshot, tasks list, edit modal, etc.)

🤝 Contributing

Feel free to submit pull requests or report issues.

⭐ Show Your Support

If you like this project, please ⭐ the repository!

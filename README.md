# Task Manager App 📝

A simple **Task Management Web Application** with authentication and CRUD features.  
Users can register, login, and manage their tasks (add, edit, delete, mark as complete/pending).  

---

## 🚀 Features
- User Registration & Login (basic authentication)
- Add, Edit & Delete tasks
- Mark tasks as Completed / Pending
- Responsive and clean UI
- Separate backend (Node.js + Express) and frontend (React)

---

## 🛠️ Tech Stack
- **Frontend:** React (HTML, CSS, JavaScript)
- **Backend:** Node.js, Express
- **Database:** MongoDB (Mongoose ORM)
- **Authentication:** JWT (JSON Web Token)

---

## 📸 Screenshots

### 🔹 Login Page
<img width="1887" height="1078" alt="image" src="https://github.com/user-attachments/assets/9f7b0dad-f9d0-42ac-927d-1f46be12ba3d" />
### Added Tasks
<img width="1918" height="1007" alt="image" src="https://github.com/user-attachments/assets/424f4845-e5ff-4461-bf11-87460e7d1480" />



*(Add more screenshots like Register Page, Task Dashboard after you run and capture them)*

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/task-manager-app.git
cd task-manager-app
2️⃣ Backend Setup
bash
Copy code
cd backend
npm install
npm start
Backend runs on: http://localhost:5000

3️⃣ Frontend Setup
bash
Copy code
cd frontend
npm install
npm start
Frontend runs on: http://localhost:3000

🧑‍💻 Usage
Open the frontend in browser → http://localhost:3000

Register a new account

Login using your credentials

Add, Edit, Delete tasks

Toggle tasks as Completed ✅ or Pending ⏳

📂 Project Structure
csharp
Copy code
task-manager-app/
│── backend/         # Node.js + Express backend
│   ├── models/      # Mongoose models (User, Task)
│   ├── routes/      # API routes (auth, tasks)
│   └── server.js    # Backend entry point
│
│── frontend/        # React frontend
│   ├── src/         
│   │   ├── components/  # React components
│   │   └── App.js
│   └── public/
│
└── README.md        # Project documentation
✅ Future Improvements
Add user profile management

Task deadlines & reminders

Categories/Tags for tasks

Deployment on Render / Vercel / Netlify

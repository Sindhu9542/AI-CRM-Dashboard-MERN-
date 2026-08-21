# AI CRM Dashboard

A full-stack **AI-powered Customer Relationship Management (CRM) Dashboard** built using the MERN stack. The application is designed to help businesses manage leads, contacts, tasks, notes, sales pipelines, analytics, and AI-assisted insights from a single dashboard.

## 🚀 Features

* 🔐 User authentication with JWT
* 👤 User profile management
* 👥 Contact management
* 🎯 Lead management
* 🔎 Lead search and filtering
* 📊 Dashboard and analytics
* 📝 Notes management
* ✅ Follow-up task management
* 📈 Sales pipeline management
* 🤖 AI-powered CRM features
* 📧 AI-assisted email generation
* 💡 AI insights
* 🛡️ Protected API routes
* 🗄️ MongoDB database integration
* ⚡ React-based responsive dashboard

## 🛠️ Tech Stack

### Frontend

* React
* Vite
* JavaScript
* CSS
* React Router
* Context API

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcrypt
* dotenv

### AI

* AI-powered services for CRM insights and email assistance

## 📁 Project Structure

```text
AI-CRM-Dashboard-MERN/
│
├── BACKEND/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── ai.controller.js
│   │   ├── analytics.controller.js
│   │   ├── auth.controller.js
│   │   ├── contact.controller.js
│   │   ├── lead.controller.js
│   │   ├── note.controller.js
│   │   └── task.controller.js
│   │
│   ├── middlewares/
│   │   ├── auth.middleware.js
│   │   └── error.middleware.js
│   │
│   ├── models/
│   │   ├── Contact.js
│   │   ├── Lead.js
│   │   ├── Note.js
│   │   ├── Task.js
│   │   └── User.js
│   │
│   ├── routes/
│   │   ├── ai.route.js
│   │   ├── analytics.route.js
│   │   ├── auth.route.js
│   │   ├── contact.route.js
│   │   ├── lead.route.js
│   │   ├── note.route.js
│   │   └── task.route.js
│   │
│   ├── services/
│   │   └── ai.service.js
│   │
│   ├── utils/
│   │   ├── ApiError.js
│   │   ├── asyncHandler.js
│   │   └── generateToken.js
│   │
│   ├── package.json
│   └── server.js
│
└── FRONTEND/
    └── aicrmdashboard/
        └── ai-crm-dashboard-ui-boilerplate-code/
            ├── public/
            ├── src/
            ├── package.json
            └── vite.config.js
```

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/Sindhu9542/AI-CRM-Dashboard-MERN-.git
cd AI-CRM-Dashboard-MERN-
```

### 2. Backend setup

```bash
cd BACKEND
npm install
```

Create a `.env` file inside the `BACKEND` folder:

```env
PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=7d
```

Add any additional AI/API keys required by the AI service.

### 3. Start the backend

```bash
npm run dev
```

The backend will run on the configured port.

### 4. Frontend setup

Open another terminal:

```bash
cd FRONTEND/aicrmdashboard/ai-crm-dashboard-ui-boilerplate-code
npm install
npm run dev
```

Vite will provide the local frontend URL in the terminal.

## 🔐 Environment Variables

Environment variables contain sensitive information and should **never be committed to GitHub**.

The project uses `.gitignore` to exclude:

```text
.env
.env.*
node_modules/
```

Create your own `.env` file locally when running the project.

## 🔄 Application Architecture

```text
React Frontend
      │
      │ HTTP Requests
      ▼
Express.js API
      │
      ├── Authentication Middleware
      ├── Controllers
      ├── Services
      │
      ▼
MongoDB / Mongoose
      │
      ▼
CRM Data
```

AI-related requests follow the backend AI service layer before returning results to the frontend.

## 📌 Current Development Status

This project is currently under active development.

The frontend dashboard was initially based on a React/Vite CRM UI boilerplate, while the backend is being developed and integrated with the frontend as part of the project.

Planned improvements include:

* Completing frontend-backend integration
* Improving AI-powered CRM functionality
* Expanding analytics
* Improving validation and error handling
* Adding more advanced CRM automation
* Deploying the application

## 🎯 Learning Goals

This project is also being developed as a practical full-stack learning project covering:

* MERN stack development
* REST API design
* MongoDB and Mongoose
* JWT authentication
* React application architecture
* Backend middleware
* API integration
* AI integration
* Git and GitHub
* Full-stack project structure

## 👩‍💻 Author

**Sindhu Jakkula**

GitHub: [Sindhu9542](https://github.com/Sindhu9542)

---

⭐ If you find this project useful, consider giving it a star.

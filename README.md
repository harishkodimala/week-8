````md
# User Management App

A modern full-stack User Management application built using React, Express.js, MongoDB, and Node.js.

This project allows users to:

- Add new users
- View all users
- View individual user details

The application follows a clean frontend/backend architecture and demonstrates REST API integration with a React frontend.

---

# Tech Stack

## Frontend

- React.js
- React Router
- React Hook Form
- Tailwind CSS
- Vite

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS
- dotenv

---

# Features

## Frontend Features

- Responsive UI
- React Router navigation
- User creation form
- User listing page
- User details page
- Component-based architecture

## Backend Features

- REST API architecture
- MongoDB integration
- User schema with Mongoose
- Express routing
- JSON request handling
- CORS support

---

# Folder Structure

```txt
user-management-app/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   └── package.json
│
├── backend/
│   ├── APIs/
│   ├── models/
│   ├── server.js
│   └── package.json
│
└── README.md
````

---

# Installation

## Clone Repository

```bash
git clone https://github.com/harishkodimala/week-8.git
```

---

# Backend Setup

## Navigate to backend

```bash
cd backend
```

## Install dependencies

```bash
npm install
```

## Create `.env` file

```env
DB_URL=your_mongodb_connection_string
PORT=4000
```

## Start backend server

```bash
node server.js
```

---

# Frontend Setup

## Navigate to frontend

```bash
cd frontend
```

## Install dependencies

```bash
npm install
```

## Start frontend

```bash
npm run dev
```

---

# API Endpoints

## Create User

```http
POST /user-router/users
```

## Get All Users

```http
GET /user-router/users
```

---

# Future Improvements

* Edit user functionality
* Delete user functionality
* Authentication & Authorization
* Search & Filter users
* Pagination
* Better form validation
* Toast notifications
* Deployment

---

# Learning Outcomes

This project helped in understanding:

* MERN architecture
* REST API integration
* React routing
* Form handling with React Hook Form
* MongoDB operations
* Full-stack application structure

---

# Author

Harish Kodimala

```
```

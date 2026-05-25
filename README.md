# User Management App

A modern full-stack User Management application built using React, Express.js, MongoDB, and Node.js.

This project demonstrates REST API integration, frontend routing, form handling, and MongoDB database operations using a clean frontend/backend architecture.

---

# Features

## Frontend Features

* Responsive user interface
* React Router navigation
* Add new users
* View all users
* View individual user details
* Component-based architecture
* Form handling using React Hook Form

## Backend Features

* RESTful API architecture
* MongoDB database integration
* Mongoose schema modeling
* Express.js routing
* JSON request handling
* CORS configuration

---

# Tech Stack

## Frontend

* React.js
* React Router DOM
* React Hook Form
* Tailwind CSS
* Vite

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* dotenv
* CORS

---

# Folder Structure

```txt
week-8/
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
```

---

# Installation & Setup

##  Clone the Repository

```bash
git clone https://github.com/harishkodimala/week-8.git
```

---

#  Backend Setup

## Navigate to backend folder

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

#  Frontend Setup

## Navigate to frontend folder

```bash
cd frontend
```

## Install dependencies

```bash
npm install
```

## Start frontend server

```bash
npm run dev
```

---

#  API Endpoints

## Create User

```http
POST /user-router/users
```

## Get All Users

```http
GET /user-router/users
```

---

#  Learning Outcomes

This project helped in understanding:

* MERN stack architecture
* REST API development
* React routing
* Form handling using React Hook Form
* MongoDB database operations
* Full-stack project structure


# 🧭 User Access Management System

## 🚀 Overview

A complete user access management system built with **Node.js + React + TypeORM**, supporting:

- User registration & login
- Role-based access control
- Software creation
- Access request & approval flow

---

## 🛠 Tech Stack

| Layer    | Tech                |
| -------- | ------------------- |
| Backend  | Node.js, Express.js |
| Frontend | React               |
| Database | PostgreSQL          |
| ORM      | TypeORM             |
| Auth     | JWT, bcrypt         |
| Tooling  | dotenv, nodemon     |

---

## 🧩 Features

- 📝 User Sign-up / Login (JWT based)
- 🧑‍💻 Role-based Access (Employee / Manager / Admin)
- 🧮 Software Management (Admin only)
- 📩 Access Requests (Employees)
- ✅ Approval System (Managers/Admins)

---

## 🔧 Setup Instructions

### 📦 Prerequisites

- Node.js
- PostgreSQL
- Git

### ⚙️ Environment Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/vaibhav-chittora/User-Access-Management-System-Backend.git

   cd user-access-management
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file:

   ```env
   PORT=3000
   DB_HOST=localhost
   DB_PORT=5432
   DB_USERNAME=your_username
   DB_PASSWORD=your_password
   DB_NAME=your_database
   JWT_SECRET=your_jwt_secret
   ```

4. Run database & app:
   ```bash
   npm start
   ```
5. Your backend server should now be running at `http://localhost:3000`.

---

## 🧪 API Documentation

### ✅ Auth

#### POST `/api/auth/signup`

Register new user (default role: Employee)

```json
{
  "username": "john",
  "password": "123456",
  "role": "Employee"
}
```

#### POST `/api/auth/login`

Login & receive JWT

```json
{
  "username": "john",
  "password": "123456"
}
```

**Response:**

```json
{
  "token": "JWT_TOKEN",
  "username": "john",
  "role": "Employee",
  "id": 1
}
```

---

### 🛠 Software (Admin Only)

#### POST `/api/software`

Create software  
**Headers:** `Authorization: Bearer <token>`

```json
{
  "name": "Figma",
  "description": "UI design tool",
  "accessLevels": ["Read", "Write", "Admin"]
}
```

#### GET `/api/software`

List all software (all authenticated users)
**Response:**

```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Figma",
      "description": "UI design tool",
      "accessLevels": ["Read", "Write", "Admin"]
    }
  ]
}
```

---

### 📩 Access Requests

#### POST `/api/requests`

Submit access request (Employee only)

```json
{
  "software": 1,
  "accessType": "Read",
  "reason": "Need to view designs"
}
```

#### GET `/api/requests`

View all requests (Manager/Admin only)
**Headers:** `Authorization: Bearer <token>`

#### PATCH `/api/requests/:id`

Approve or reject a request

```json
{
  "status": "Approved"
}
```

---

## 🔐 Roles

| Role     | Permissions                     |
| -------- | ------------------------------- |
| Employee | Request software access         |
| Manager  | View & act on requests          |
| Admin    | Full access + software creation |

---

## 📦 Project Structure

```
├── src
│   ├── controllers
│   ├── models
│   ├── services
│   ├── repositories
│   ├── routes
│   ├── middlewares
│   └── config
├── .env
├── README.md
└── package.json
```

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

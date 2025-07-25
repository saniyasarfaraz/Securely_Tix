﻿# Securelytix

This repository contains two assignments developed as part of the Securelytix Full Stack Developer Task using the **MERN stack**.

---

## Assignment 1: User Authentication 

### Features
- Login & Registration functionality
- Email & password validation
- "Remember Me" option (7-day login persistence)
- Password toggle (show/hide password)
- Fully responsive design
- Backend with token-based authentication (JWT)


### Tech Stack
- Frontend: React (CRA), CSS
- Backend: Node.js, Express.js, MongoDB, Mongoose, JWT
- Deployment: Render (Backend)



### Environment Variables
In `server/.env`:
```
MONGO_URI=your_mongodb_connection
PORT=5000
JWT_SECRET=your_jwt_secret_key
```

### Test Credentials

Email: test@securelytix.com

Password: test1234

---



## Assignment 2: Securelytix Dashboard

### Features
- **Client Dropdown** – View details about selected clients
- **Employee Dropdown** – View selected employee profile
- **Summary Section** – Total Clients, Team Members, Risk Stats
- **Responsive Design** – Header adjusts for small screens
- **Logout Button** – Clears session and redirects to login

### Tech Stack
- **Frontend:** React.js, CSS
- **Backend:** Node.js, Express.js (hosted on Render)
- **API Base URL:** `https://securely-tix.onrender.com/`


###  API Endpoints
- `GET /api/clients` — Returns list of clients
- `GET /api/employees` — Returns list of employees
- `GET /api/summary` — Returns summary data for dashboard

---

## Screenshots

### Assignment 1 - Login Page
![Login Page](screenshots/login.png)

### Assignment 2 - Dashboard UI
![Dashboard](screenshots/dashboard.png)

---

## Live Demo
Frontend: [https://securely-tix.vercel.app/](https://securely-tix.vercel.app/)

Backend: [https://securely-tix.onrender.com/](https://securely-tix.onrender.com/)


---

## Author

**Saniya Sarfaraz**  
GitHub: [saniyasarfaraz](https://github.com/saniyasarfaraz)

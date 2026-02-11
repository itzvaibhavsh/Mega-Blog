# 🚀 Mega Blog – Full Stack Blogging Platform

A modern full-stack blogging platform built with **React + Appwrite**, featuring authentication, protected routes, rich text editing, image uploads, and production deployment.

🔗 **Live Demo:** https://your-vercel-link.vercel.app  
🔗 **Backend Services:** Appwrite Cloud  

---

## 📌 Overview

Mega Blog is a scalable and modular blogging platform where users can:

- Create an account
- Login securely
- Create, edit, delete blog posts
- Upload featured images
- View posts from all users

The project follows clean architecture principles with separation of service layer, UI components, routing, and global state management.

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- Redux Toolkit (State Management)
- React Router
- TinyMCE (Rich Text Editor)
- Tailwind CSS

### Backend (BaaS)
- Appwrite (Auth, Database, Storage)

### Deployment
- Vercel (Frontend)
- Appwrite Cloud (Backend Services)

---

## ✨ Features

- 🔐 User Authentication (Signup / Login / Logout)
- 🛡 Protected Routes
- 📝 Create / Edit / Delete Posts
- 🖼 Image Upload via Appwrite Storage
- 📦 Global State Management with Redux
- 🖊 Rich Text Editing with TinyMCE
- 🌐 Production Deployment (Vercel + Appwrite)

---

## 🧱 Project Architecture

The application follows a modular structure:

```
Mega-Blog/
│
├── public/
│
├── src/
│   ├── appwrite/          # Appwrite service layer (Auth, DB, Storage logic)
│   ├── components/        # Reusable UI components
│   ├── pages/             # Route-level pages
│   ├── store/             # Redux store & slices
│   ├── conf.js            # Environment configuration
│   ├── App.jsx            # Root component
│   └── main.jsx           # Entry point
│
├── package.json
└── vite.config.js
```

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory:

```
VITE_APPWRITE_URL=
VITE_APPWRITE_PROJECT_ID=
VITE_APPWRITE_DATABASE_ID=
VITE_APPWRITE_COLLECTION_ID=
VITE_APPWRITE_BUCKET_ID=
```

---

## 🚀 Running Locally

```bash
git clone https://github.com/your-username/Mega-Blog.git
cd Mega-Blog
npm install
npm run dev
```

---

## 📈 Production Deployment

The application is deployed using:

- **Vercel** for frontend hosting
- **Appwrite Cloud** for backend services

Optimized build via Vite for fast performance.

---

## 🧠 Key Engineering Decisions

- Used Redux Toolkit for predictable state management.
- Service layer abstraction for Appwrite operations.
- Protected route architecture for secure navigation.
- Environment-based configuration for scalable deployments.

---

## 🎯 Resume Impact

This project demonstrates:

- Full-stack integration using BaaS
- Authentication and secure routing
- State management architecture
- Production deployment experience
- Clean, modular frontend architecture

---

## 👨‍💻 Author

Vaibhav Sharma  
B.Tech – NIT Durgapur  
Aspiring SDE-1 | MERN Stack Developer  

---

⭐ If you found this project useful, consider giving it a star.

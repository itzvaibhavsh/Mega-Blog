# 🚀 Mega Blog – Full-Stack Blog Platform

A production-ready blog platform built using **React, Redux Toolkit, TailwindCSS, and Appwrite**, featuring authentication, protected routes, rich text editing, and cloud storage integration.

🌐 **Live Demo:**  
👉 https://mega-blog-eight-rosy.vercel.app

---

## 📌 Overview

Mega Blog is a modern full-featured blog application that allows users to:

- Sign up and log in securely
- Create, edit, and delete blog posts
- Upload and manage images
- Use a rich-text editor for formatted content
- Access protected routes based on authentication
- Persist state using Redux Toolkit

The application is fully deployed in production using **Vercel** and integrates with **Appwrite Cloud** for backend services.

---

## 🛠 Tech Stack

### Frontend
- React 19
- Redux Toolkit
- React Router DOM
- React Hook Form
- TailwindCSS
- TinyMCE Rich Text Editor

### Backend (BaaS)
- Appwrite Cloud
  - Authentication
  - Database
  - Storage (Image Uploads)

### Deployment
- Vercel (Frontend Hosting)
- Appwrite Cloud (Backend Services)

---

## ✨ Features

- 🔐 User Authentication (Signup/Login)
- 🛡 Protected Routes
- 📝 Create / Edit / Delete Posts
- 🖼 Image Upload via Appwrite Storage
- 🧠 Global State Management with Redux
- 📄 Rich Text Editing with TinyMCE
- ☁ Production Deployment (Vercel + Appwrite)

---

## 📂 Project Structure

src/ ├── appwrite/       # Appwrite service logic ├── components/     # Reusable UI components ├── pages/          # Route-level components ├── store/          # Redux store & slices ├── conf.js         # Environment configuration ├── App.jsx └── main.jsx

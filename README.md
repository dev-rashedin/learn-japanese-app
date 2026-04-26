# LearnJapanese – Language Learning Platform

**LearnJapanese** is a full-stack web application designed to help users learn Japanese through an interactive and structured experience. The platform includes secure authentication, user progress management, and an admin dashboard for content control.

🔗 **Live Application:** [https://learjapaneese.web.app](https://learjapaneese.web.app)
🔗 **Backend API:** [https://learn-japanese-app-server.vercel.app](https://learn-japanese-app-server.vercel.app)

---

## Overview

This project demonstrates end-to-end development of a modern web application, including frontend UI, backend APIs, authentication, and database integration. It focuses on scalability, clean architecture, and user experience.

---

## Key Features

### User Features

* Secure authentication (Email/Password, Google, GitHub)
* JWT-based session management
* Responsive UI across all device sizes
* Interactive learning experience with dynamic content
* Form handling with validation

### Admin Features

* Admin dashboard for managing content
* Full CRUD operations for learning resources
* Role-based access control

---

## Tech Stack

### Frontend

* React
* React Router
* Firebase Authentication
* TanStack Query (data fetching & caching)
* React Hook Form (form management)
* React Helmet Async (SEO optimization)

### Backend

* Node.js
* Express.js
* MongoDB (with Aggregation Pipeline)
* JWT Authentication
* Nodemailer (email services)
* CORS & Cookie Parser

---

## Architecture Highlights

* **Authentication:** Firebase for user login + JWT for secure API communication
* **State Management:** Server-state handled efficiently using TanStack Query
* **Database:** MongoDB with optimized queries and aggregation pipelines
* **Security:** Environment variables for sensitive credentials, token-based auth
* **Scalability:** Separation of frontend and backend with RESTful API design

---

## Environment & Configuration

Sensitive credentials (Firebase config, MongoDB URI, JWT secrets) are managed via environment variables using `.env` files.

---

## What This Project Demonstrates

* Full-stack development skills
* Secure authentication implementation
* REST API design and integration
* Database design and query optimization
* Clean and maintainable React architecture

---

## Notes

Admin credentials are not included in this README for security reasons. They can be provided upon request if needed for evaluation.

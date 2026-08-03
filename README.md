# SaaS Platform

A full-stack SaaS application built to demonstrate secure authentication, subscription management, project management, and modern frontend-backend integration.

The application allows users to create an account, securely log in, manage their projects, explore subscription plans, and choose a plan through a protected API. The project follows a modular architecture and uses TypeScript across both the frontend and backend.

---

## Features

### Authentication

- User registration and login
- JWT-based authentication
- Protected frontend routes
- Role-based access control for users and administrators
- Forgot password functionality
- Password reset functionality
- Secure password hashing with bcrypt

### Project Management

- Create projects
- View personal projects
- Update project details
- Delete projects
- User-specific project access

### Subscription Management

- View available subscription plans
- Choose a subscription plan
- View the current active subscription
- Prevent duplicate active subscriptions
- Protected subscription APIs
- Plan information included with subscription details

### Additional Backend Features

- Request validation with Zod
- File upload support using Multer
- Email integration using Nodemailer
- Swagger API documentation
- Centralized error handling
- Logging with Winston
- API testing with Jest and Supertest
- Security middleware with Helmet, rate limiting, and HPP protection

---

## Tech Stack

### Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Axios
- React Hot Toast
- React Icons

### Backend

- Node.js
- Express.js
- TypeScript
- Prisma ORM
- PostgreSQL
- JSON Web Tokens (JWT)
- Zod
- Multer
- Nodemailer
- Swagger
- Winston
- Jest
- Supertest

---

## Project Structure

```text
saas-platform/
│
├── client/                     # React frontend
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── context/
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── routes/
│   │   ├── services/
│   │   └── types/
│   └── package.json
│
├── server/                     # Express backend
│   ├── prisma/
│   │   ├── migrations/
│   │   └── schema.prisma
│   │
│   ├── src/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── types/
│   │   ├── validators/
│   │   ├── app.ts
│   │   └── index.ts
│   │
│   ├── tests/
│   └── package.json
│
└── README.md
```

---

## Getting Started

### Prerequisites

Make sure the following are installed:

- Node.js
- npm
- PostgreSQL

---

## 1. Clone the Repository

```bash
git clone https://github.com/Ritesh-Dixit/saas-platform.git
```

Move into the project folder:

```bash
cd saas-platform
```

---

## 2. Set Up the Backend

Move into the server folder:

```bash
cd server
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
DATABASE_URL="your_postgresql_database_url"

JWT_SECRET="your_jwt_secret"

EMAIL_USER="your_email@gmail.com"

EMAIL_PASS="your_email_app_password"

PORT=5000
```

Run the database migrations:

```bash
npx prisma migrate dev
```

Generate the Prisma client:

```bash
npx prisma generate
```

Start the backend:

```bash
npm run dev
```

The backend will run at:

```text
http://localhost:5000
```

Swagger documentation will be available at:

```text
http://localhost:5000/api-docs
```

---

## 3. Set Up the Frontend

Open another terminal and move into the client folder:

```bash
cd saas-platform/client
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
VITE_API_URL=http://localhost:5000/api
```

Start the frontend:

```bash
npm run dev
```

The frontend will run at:

```text
http://localhost:5173
```

---

## API Overview

### Authentication

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Log in and receive a JWT |
| POST | `/api/auth/forgot-password` | Request a password reset |
| POST | `/api/auth/reset-password` | Reset the password |

### Projects

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/projects` | Get the logged-in user's projects |
| POST | `/api/projects` | Create a project |
| PUT | `/api/projects/:id` | Update a project |
| DELETE | `/api/projects/:id` | Delete a project |

### Plans and Subscriptions

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/plans` | Get available subscription plans |
| POST | `/api/subscriptions` | Create a subscription |
| GET | `/api/subscriptions/me` | Get the current user's active subscription |

---

## Authentication

Protected API routes use JWT Bearer authentication.

After logging in, copy the JWT token and add it to the request header:

```http
Authorization: Bearer YOUR_JWT_TOKEN
```

When using Swagger, use the token format expected by the Swagger authorization field.

---

## Available Commands

### Frontend

```bash
cd client
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

### Backend

```bash
cd server
```

Start the development server:

```bash
npm run dev
```

Build the backend:

```bash
npm run build
```

Run tests:

```bash
npm test
```

Generate the Prisma client:

```bash
npx prisma generate
```

Run database migrations:

```bash
npx prisma migrate dev
```

Open Prisma Studio:

```bash
npx prisma studio
```

---

## Security

The backend includes several security and reliability measures:

- JWT authentication
- Password hashing with bcrypt
- Role-based authorization
- Request validation with Zod
- Helmet security headers
- Rate limiting
- HPP protection
- CORS configuration
- Centralized error handling

---

## Current Project Status

The core application is complete and functional.

Implemented:

- Authentication system
- Protected dashboard
- Project CRUD operations
- File upload support
- Subscription plans
- Subscription creation
- Active subscription retrieval
- Duplicate subscription protection
- Swagger API documentation
- Frontend and backend integration

Planned improvements:

- Change or upgrade an active subscription
- Cancel subscriptions
- Subscription history
- Payment gateway integration
- Admin dashboard
- Email verification
- Deployment and production environment configuration

---

## About the Developer

**Ritesh Dixit**

B.Tech Computer Science Engineering student and aspiring Full Stack Developer.

I enjoy building practical web applications, working with modern JavaScript technologies, and improving my skills through hands-on projects.

---

## Connect

- GitHub: https://github.com/Ritesh-Dixit
- LinkedIn: https://www.linkedin.com/in/ritesh-dixit-88a665327
- Email: riteshdixt007@gmail.com

---

## License

This project is licensed under the MIT License.
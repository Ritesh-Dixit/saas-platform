# SaaS Platform

A full-stack SaaS Subscription Management Platform built to demonstrate secure authentication, project management, subscription management, and modern frontend-backend integration.

The application allows users to create an account, securely log in, manage their projects, explore subscription plans, and create subscriptions through protected APIs.

The project uses TypeScript across both the frontend and backend and follows a modular architecture.

---

## Live Demo

**Live Application:**  
https://saas-platform-client.onrender.com

**Backend API:**  
https://saas-platform-y9fr.onrender.com

**GitHub Repository:**  
https://github.com/Ritesh-Dixit/saas-platform

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
- Security middleware with Helmet
- Rate limiting
- HPP protection
- CORS configuration

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
- bcrypt
- Zod
- Multer
- Nodemailer
- Swagger
- Winston
- Jest
- Supertest

### Deployment

- Render
- PostgreSQL
- Prisma Migrate

---

## Project Architecture

The project follows a separated frontend and backend architecture.

```text
Frontend
React + TypeScript
       |
       | REST API
       ↓
Backend
Node.js + Express + TypeScript
       |
       ↓
Prisma ORM
       |
       ↓
PostgreSQL
Project Structure
saas-platform/
│
├── client/                         # React frontend
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── context/
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── routes/
│   │   ├── services/
│   │   └── types/
│   │
│   └── package.json
│
├── server/                         # Express backend
│   ├── prisma/
│   │   ├── migrations/
│   │   ├── schema.prisma
│   │   └── seed.ts
│   │
│   ├── src/
│   │   ├── config/
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
Getting Started
Prerequisites

Make sure the following are installed:

Node.js
npm
PostgreSQL
Git
1. Clone the Repository
git clone https://github.com/Ritesh-Dixit/saas-platform.git

Move into the project folder:

cd saas-platform
2. Set Up the Backend

Move into the server folder:

cd server

Install dependencies:

npm install
Backend Environment Variables

Create a .env file inside the server directory:

DATABASE_URL="your_postgresql_database_url"

JWT_SECRET="your_jwt_secret"

EMAIL_USER="your_email@gmail.com"

EMAIL_PASS="your_email_app_password"

PORT=5000

Do not commit your .env file to GitHub.

Run Database Migrations

For local development:

npx prisma migrate dev

Generate the Prisma Client:

npx prisma generate
Seed Subscription Plans

If you want to populate the database with the default subscription plans:

npm run seed
Start the Backend

Run the development server:

npm run dev

The backend will run at:

http://localhost:5000

Swagger API documentation:

http://localhost:5000/api-docs
3. Set Up the Frontend

Open another terminal.

Move into the client folder:

cd saas-platform/client

Install dependencies:

npm install

Create a .env file inside the client directory:

VITE_API_URL=http://localhost:5000/api

Start the frontend:

npm run dev

The frontend will run at:

http://localhost:5173
API Overview
Authentication
Method	Endpoint	Description
POST	/api/auth/register	Register a new user
POST	/api/auth/login	Log in and receive a JWT
POST	/api/auth/forgot-password	Request a password reset
POST	/api/auth/reset-password	Reset the password
Projects
Method	Endpoint	Description
GET	/api/projects	Get the logged-in user's projects
POST	/api/projects	Create a project
PUT	/api/projects/:id	Update a project
DELETE	/api/projects/:id	Delete a project
Plans
Method	Endpoint	Description
GET	/api/plans	Get available subscription plans
Subscriptions
Method	Endpoint	Description
POST	/api/subscriptions	Create a subscription
GET	/api/subscriptions/me	Get the current user's active subscription
Authentication

Protected API routes use JWT Bearer authentication.

After logging in, the server returns a JWT token.

Protected requests use the following header:

Authorization: Bearer YOUR_JWT_TOKEN

The frontend automatically attaches the JWT token to API requests using an Axios interceptor.

Database

The project uses:

PostgreSQL as the database
Prisma as the ORM

The main database entities include:

User
Project
Plan
Subscription

Relationships between users, projects, plans, and subscriptions are managed through Prisma.

Subscription Plans

The application currently supports multiple subscription plans.

Example plans include:

Plan	Price
Free	₹0
Basic	₹299
Pro	₹999
Enterprise	₹4999

Plans are stored in PostgreSQL and retrieved through the backend API.

Available Commands
Frontend

Move into the client directory:

cd client

Start development server:

npm run dev

Build for production:

npm run build
Backend

Move into the server directory:

cd server

Start development server:

npm run dev

Build the backend:

npm run build

Run tests:

npm test

Seed the database:

npm run seed

Generate Prisma Client:

npx prisma generate

Create and run development migrations:

npx prisma migrate dev

Deploy existing migrations:

npx prisma migrate deploy

Open Prisma Studio:

npx prisma studio
Security

The backend includes several security and reliability measures:

JWT authentication
Password hashing with bcrypt
Role-based authorization
Request validation with Zod
Helmet security headers
Rate limiting
HPP protection
CORS configuration
Centralized error handling
Environment variable validation
Protected API routes
User-specific resource access
Deployment

The application is deployed using Render.

Frontend

The React frontend is deployed as a production web service.

https://saas-platform-client.onrender.com
Backend

The Node.js and Express backend is deployed as a production web service.

https://saas-platform-y9fr.onrender.com
Database

The production application uses PostgreSQL with Prisma ORM.

Production migrations are applied using:

npx prisma migrate deploy

The database is seeded with the available subscription plans during deployment.

Deployment Architecture
User
 │
 ▼
React Frontend
 │
 │ HTTPS / REST API
 ▼
Express Backend
 │
 ▼
Prisma ORM
 │
 ▼
PostgreSQL Database
Current Project Status

The core application is complete, functional, and deployed.

Implemented
User registration
User login
JWT authentication
Protected routes
Role-based authorization
Forgot password
Password reset
Project CRUD operations
User-specific project access
File upload support
Subscription plans
Subscription creation
Active subscription retrieval
Duplicate subscription protection
Swagger API documentation
Request validation
Centralized error handling
Security middleware
PostgreSQL database
Prisma ORM
Prisma migrations
Database seeding
Frontend and backend integration
Production CORS configuration
Production environment configuration
Frontend deployment
Backend deployment
Planned Improvements
Change or upgrade an active subscription
Cancel subscriptions
Subscription history
Payment gateway integration
Admin dashboard
Email verification
Improved analytics and reporting
What I Learned

Working on this project helped me gain practical experience with:

Full-stack application architecture
REST API development
JWT authentication
PostgreSQL database design
Prisma ORM
Database migrations
API validation
Backend security
Frontend-backend integration
Environment variable management
Production CORS configuration
Database seeding
Git and GitHub workflows
Deploying full-stack applications
Debugging production issues

One of the most valuable parts of the project was taking the application from local development to a live production environment and solving real deployment issues along the way.

About the Developer

Ritesh Dixit

B.Tech Computer Science Engineering student and aspiring Full Stack Developer.

I enjoy building practical web applications, working with modern web technologies, and improving my development skills through hands-on projects.

Connect

GitHub:
https://github.com/Ritesh-Dixit

LinkedIn:
https://www.linkedin.com/in/ritesh-dixit-88a665327

Email:
riteshdixt007@gmail.com
#  SaaS Platform Backend

A modern backend for a SaaS (Software as a Service) application built with **Node.js**, **Express.js**, **TypeScript**, **Prisma**, and **PostgreSQL**.

This project includes secure authentication, project management APIs, file uploads, email functionality, Swagger API documentation, logging, testing, and production-ready security.

---

# ✨ Features

- 🔐 User Registration & Login
- 🔑 JWT Authentication
- 👤 Role-Based Authorization (Admin/User)
- 🔒 Forgot & Reset Password
- 📁 Project CRUD (Create, Read, Update, Delete)
- 📤 File Upload
- 📧 Email Integration
- 📖 Swagger API Documentation
- ✅ Request Validation with Zod
- 🛡 Security Middleware
- 📝 Logging with Winston
- 🧪 API Testing with Jest & Supertest
- ⚡ Prisma ORM + PostgreSQL

---

# 🛠 Tech Stack

- Node.js
- Express.js
- TypeScript
- Prisma ORM
- PostgreSQL
- JWT
- Zod
- Multer
- Nodemailer
- Swagger
- Winston
- Jest
- Supertest

---

# 📂 Project Structure

```text
server/
│
├── prisma/
│   ├── migrations/
│   └── schema.prisma
│
├── src/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── routes/
│   ├── services/
│   ├── types/
│   ├── utils/
│   ├── validators/
│   ├── app.ts
│   └── index.ts
│
├── tests/
│
├── package.json
├── tsconfig.json
├── jest.config.js
└── prisma.config.ts
```

---

# ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Ritesh-Dixit/saas-platform.git
```

Move into the project folder.

```bash
cd saas-platform/server
```

---

### 2. Install Dependencies

```bash
npm install
```

---

### 3. Create a `.env` File

```env
DATABASE_URL=your_database_url

JWT_SECRET=your_secret_key

EMAIL_USER=your_email@gmail.com

EMAIL_PASS=your_email_password

PORT=5000
```

---

### 4. Run Database Migration

```bash
npx prisma migrate dev
```

---

### 5. Generate Prisma Client

```bash
npx prisma generate
```

---

### 6. Start the Server

```bash
npm run dev
```

The server will start at:

```
http://localhost:5000
```

---

# 📖 API Documentation

Swagger UI is available at:

```
http://localhost:5000/api-docs
```

Available APIs include:

- Register
- Login
- Get Current User
- Forgot Password
- Reset Password
- Create Project
- Get Projects
- Update Project
- Delete Project
- File Upload

---

# 🔐 Authentication

This project uses **JWT Bearer Authentication**.

1. Register a user.
2. Login to receive a JWT token.
3. Open Swagger.
4. Click **Authorize**.
5. Enter:

```
Bearer YOUR_TOKEN
```

Now you can access all protected APIs.

---

# 🧪 Running Tests

Run all tests with:

```bash
npm test
```

Testing is done using:

- Jest
- Supertest

---

# 🗄 Database

Database: **PostgreSQL**

ORM: **Prisma**

Open Prisma Studio:

```bash
npx prisma studio
```

---

# 🛡 Security Features

This project includes:

- Helmet
- Rate Limiting
- HPP Protection
- JWT Authentication
- Password Hashing (bcrypt)
- Input Validation
- Centralized Error Handling

---

# 📜 Available Commands

### Start Development Server

```bash
npm run dev
```

### Run Tests

```bash
npm test
```

### Generate Prisma Client

```bash
npx prisma generate
```

### Run Database Migration

```bash
npx prisma migrate dev
```

### Open Prisma Studio

```bash
npx prisma studio
```

---

# 👨‍💻 About Me

**Ritesh Dixit**

🎓 B.Tech Computer Science Engineering

💻 Frontend & Backend Developer

🌱 Currently learning Full Stack Development and building SaaS applications.

---

# 📬 Connect With Me

📧 **Email**

riteshdixt007@gmail.com

🐙 **GitHub**

https://github.com/Ritesh-Dixit

💼 **LinkedIn**

https://www.linkedin.com/in/ritesh-dixit-88a665327

📷 **Instagram**

https://www.instagram.com/ritesh_dixit_7

---

# ⭐ Support

If you found this project helpful, please consider giving it a ⭐ on GitHub.

It helps others discover the project and motivates me to build more.

---

# 📄 License

This project is licensed under the **MIT License**.
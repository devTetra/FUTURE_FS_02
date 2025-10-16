# ✨ Aureo

A modern minimalist **e-commerce brand** built with React, Tailwind CSS, and Node.js. Inspired by refined typography, soft neutrals, and warm gold accents — **Aureo** delivers a luxurious yet approachable shopping experience where elegance meets functionality.

---

## 🚀 Tech Stack

| Layer                | Technology                                  |
| -------------------- | ------------------------------------------- |
| **Frontend**         | React + Vite                                |
| **UI Styling**       | Tailwind CSS                                |
| **State Management** | Context API + Reducers                      |
| **Backend / API**    | Node.js + Express                           |
| **Database**         | MongoDB                                     |
| **Authentication**   | JWT (HTTP-only cookies)                     |
| **Deployment**       | Vercel (Client) + Render / Railway (Server) |

---

## 🧠 Project Overview

**Aureo** is a concept e-commerce platform that emphasizes **visual minimalism and premium experience**.
It combines a refined interface with seamless cart and authentication functionality — creating a space that feels modern, calm, and premium.

Users can browse products, add them to their cart, sign in securely, and enjoy a cohesive experience from start to checkout.

---

## ✨ Features

🛍️ Product showcase with clean, responsive layout

🧾 Real-time cart management using React Context

🔐 Secure authentication via JWT and cookies

📦 Backend API for product and user data

🎨 Custom UI with soft neutrals and warm gold tones

📱 Fully responsive across all devices

⚡ Fast load times with Vite and optimized API calls

---

## 🧩 Folder Structure

```
future-fs-02/
│
├── client/
│   ├── src/
│   │   ├── components/       # UI components (Navbar, ProductCard, etc.)
│   │   ├── context/          # CartContext and UserContext
│   │   ├── pages/            # Application pages (Home, Shop, Cart, etc.)
│   │   └── App.jsx           # Root React component
│   │
│   ├── public/
│   │   └── favicon.png
│   │
│   ├── vite.config.js
│   ├── package.json
│   └── tailwind.config.js
│
├── server/
│   ├── config/               # Database and environment configuration
│   ├── controllers/          # Route controllers for products, users, etc.
│   ├── middleware/           # Authentication and error handling middleware
│   ├── models/               # Mongoose schemas
│   ├── routes/               # Express routes
│   ├── server.js             # Entry point
│   └── package.json
│
├── .env                      # Environment variables
└── README.md
```

---

## 🛠️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/<your-username>/FUTURE_FS_02.git
cd FUTURE_FS_02
```

### 2️⃣ Install Dependencies

```bash
cd client
npm install
cd ../server
npm install
```

### 3️⃣ Configure Environment Variables

In `/server/.env`:

```
MONGODB_URI=your_mongodb_connection_string
SECRET=your_secret_key
CLIENT_URL=http://localhost:5173
```

### 4️⃣ Run the App

In two terminals:

```bash
# Terminal 1 - Server
cd server
npm run dev

# Terminal 2 - Client
cd client
npm run dev
```

Then visit **[http://localhost:5173](http://localhost:5173)** 🎉

---

## 🌍 Deployment

- **Frontend:** Deployed on **Vercel**
- **Backend:** Deployed on **Render**
  Connect your GitHub repo to Vercel for automatic React build detection and continuous deployment. ⚡

---

## 💡 Future Enhancements

💳 Stripe payment gateway integration

📦 Order tracking and user dashboard

🧠 AI-powered product recommendations

🌐 Multi-language and currency support

📱 Progressive Web App (PWA) support

---

## 👨‍💻 Author: Treasure Ejike

💼 [LinkedIn](https://linkedin.com/in/treasure-ejike)

✉️ [tre.ejike@gmail.com](mailto:tre.ejike@gmail.com)

---

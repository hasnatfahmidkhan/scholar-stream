# 🎓 ScholarStream - Scholarship Management Platform

[![React](https://img.shields.io/badge/Frontend-React.js-61DBFB?logo=react&logoColor=white)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/Style-TailwindCSS-38B2AC?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Node.js](https://img.shields.io/badge/Backend-Node.js-43853D?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Server-Express.js-000000?logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Firebase](https://img.shields.io/badge/Auth-Firebase-FFCA28?logo=firebase&logoColor=black)](https://firebase.google.com/)
[![Stripe](https://img.shields.io/badge/Payment-Stripe-008CDD?logo=stripe&logoColor=white)](https://stripe.com/)

**ScholarStream** is a comprehensive Scholarship Management System designed to bridge the gap between students seeking financial aid and universities offering scholarships. It serves as a centralized platform where students can search, apply, and pay for scholarships, while administrators and moderators manage the application pipeline efficiently.

---

## 🔗 Live Links
- **Live Website:** [Visit ScholarStream](https://scholarshipstream.web.app/)
- **Client Repository:** [GitHub Client](https://github.com/hasnatfahmidkhan/scholar-stream)
- **Server Repository:** [GitHub Server](https://github.com/hasnatfahmidkhan/scholar-stream-server)

---

## 🔐 Admin Credentials (For Testing)
Use these credentials to access full Admin features (Manage Users, Add Scholarships, Analytics).

| Role | Email | Password |
| :--- | :--- | :--- |
| **Admin** | `admin@gmail.com` | `Admin@#1` |

---

## ✨ Key Features

### 🌍 General
- **Authentication:** Secure Firebase Login/Registration with Social Login (Google).
- **Security:** JWT (JSON Web Token) implementation for secure API access and role-based protection.
- **Responsive Design:** Fully responsive UI built with Tailwind CSS & DaisyUI.
- **Animations:** Smooth page transitions and micro-interactions using **Framer Motion** & **Lottie**.

### 🎓 Student Features (User)
- **Advanced Search & Filter:** Search scholarships by university, degree, or category.
- **Application System:** seamless application process with real-time status tracking.
- **Payment Integration:** Secure payment gateway integrated via **Stripe** for application fees.
- **Dashboard:** Manage applications, view payment history, and edit/delete pending applications.
- **Wishlist (Bonus):** Bookmark scholarships to apply later.
- **Reviews:** Add ratings and reviews for universities after application completion.

### 🛡️ Admin Features
- **Dashboard Analytics:** Visual charts (Recharts) showing total applications, revenue, and user stats.
- **User Management:** Ability to change user roles (Student ↔ Moderator ↔ Admin) or delete users.
- **Scholarship Management:** Add, update, or delete scholarship listings.

### 📝 Moderator Features
- **Application Review:** Review student applications and provide feedback.
- **Status Updates:** Change application status (Pending → Processing → Completed) or cancel applications.
- **Review Moderation:** Monitor and delete inappropriate reviews.

---

## 🛠️ Technology Stack

### Frontend
- **Framework:** React.js (Vite)
- **Styling:** Tailwind CSS, DaisyUI
- **State Management:** TanStack Query (React Query)
- **Forms:** React Hook Form
- **Routing:** React Router DOM
- **Visualization:** Recharts
- **Animations:** Framer Motion, Lottie React
- **Alerts:** SweetAlert2, React Hot Toast

### Backend
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB (using Native Driver)
- **Authentication:** JWT, Firebase Admin
- **Payment:** Stripe API

---

## 📦 Dependencies

### Client-side Packages
```json
"dependencies": {
  "@tanstack/react-query": "^5.90.12",
  "axios": "^1.13.2",
  "firebase": "^12.6.0",
  "framer-motion": "^11.0.0",
  "lottie-react": "^2.4.1",
  "react-hook-form": "^7.68.0",
  "react-hot-toast": "^2.6.0",
  "recharts": "^3.5.1",
  "sweetalert2": "^11.26.4",
  "lucide-react": "^0.560.0"
}
```

### Server-side Packages
```json
"dependencies": {
  "cookie-parser": "^1.4.7",
  "cors": "^2.8.5",
  "dotenv": "^17.2.3",
  "express": "^5.2.1",
  "jsonwebtoken": "^9.0.3",
  "mongodb": "^7.0.0",
  "stripe": "^20.0.0"
}
```


# 1. Clone the Repositories
🚀 Local Installation Guide
Follow these steps to run the project locally.

# Clone Client
git clone https://github.com/hasnatfahmidkhan/scholar-stream.git

# Clone Server
git clone https://github.com/hasnatfahmidkhan/scholar-stream-server.git

# 2. Backend Setup
Navigate to the server folder, install dependencies, and setup .env.

cd scholar-stream-server
npm install

Create a .env file in the root of the server:

PORT=5000 <br/>
DB_USER=your_mongodb_username <>
DB_PASS=your_mongodb_password
ACCESS_TOKEN_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key

Start the server:
npm start

# 3. Frontend Setup
Navigate to the client folder, install dependencies, and setup .env.

cd scholar-stream
npm install

Create a .env.local file in the root of the client:

VITE_APIKEY=your_firebase_api_key
VITE_AUTHDOMAIN=your_firebase_auth_domain
VITE_PROJECTID=your_firebase_project_id
VITE_STORAGEBUCKET=your_firebase_storage_bucket
VITE_MESSAGINGSENDERID=your_messaging_sender_id
VITE_APPID=your_app_id
VITE_HOSTING_URL=http://localhost:5000
VITE_DOMAIN_URL=http://localhost:5173

Start the client:
npm run dev

🔮 Future Improvements
Recommendation System: Suggest scholarships based on user profile and search history.
Chat System: Live chat between students and moderators.
Email Notifications: Automated emails for application status changes.

# 🎓 ScholarStream - Scholarship Management Platform

[![React](https://img.shields.io/badge/Frontend-React.js-61DBFB?logo=react&logoColor=white)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/Style-TailwindCSS-38B2AC?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Node.js](https://img.shields.io/badge/Backend-Node.js-43853D?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Server-Express.js-000000?logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Firebase](https://img.shields.io/badge/Auth-Firebase-FFCA28?logo=firebase&logoColor=black)](https://firebase.google.com/)
[![JWT](https://img.shields.io/badge/Auth-JWT-000000?logo=jsonwebtokens&logoColor=white)](https://jwt.io/)
[![Stripe](https://img.shields.io/badge/Payment-Stripe-008CDD?logo=stripe&logoColor=white)](https://stripe.com/)

# 📋 Project Overview
**ScholarStream** is a comprehensive Scholarship Management System designed to bridge the gap between students seeking financial aid and universities offering scholarships. It serves as a centralized platform where students can search, apply, and pay for scholarships, while administrators and moderators manage the application pipeline efficiently through role-based dashboards.

# 🔗 Project Links
- [**Live Website**](https://scholarshipstream.web.app/)
- [**Client Repository**](https://github.com/hasnatfahmidkhan/scholar-stream)
- [**Server Repository**](https://github.com/hasnatfahmidkhan/scholar-stream-server)

---

# 🔐 Admin Credentials (For Testing)
Use these credentials to access full Admin features (Manage Users, Add Scholarships, Analytics).

| Role | Email | Password |
| :--- | :--- | :--- |
| **Admin** | `admin@gmail.com` | `Admin@#1` |

---

# ✨ Key Features

### 🔐 Authentication & Security
- **Secure Login:** Firebase Authentication for seamless Social (Google) and Email/Password login.
- **JWT Protection:** Secured API endpoints using JSON Web Tokens (JWT) stored in HTTP-only cookies/local storage.
- **Role-Based Security:** Custom middleware (`verifyAdmin`, `verifyModerator`) to protect sensitive routes.

### 👥 User Roles & Dashboards
- **Student Dashboard:** Track application status, make payments, manage the wishlist, and write reviews.
- **Moderator Dashboard:** Review applications, provide feedback, update status (Pending/Processing/Completed), and moderate reviews.
- **Admin Dashboard:** Manage all users, add/edit/delete scholarships, and view system-wide analytics charts.

### 🍳 Core Functionalities
- **Advanced Search & Filter:** Server-side searching by University/Scholarship name and filtering by Degree/Category.
- **Payment Integration:** **Stripe** integration for secure application fee processing.
- **Application Workflow:** Complete lifecycle management (Apply -> Pay -> Review -> Accept/Reject).
- **Wishlist:** Ability for students to bookmark scholarships for later.
- **Analytics:** Visual data representation using Recharts for business insights.

### 📱 UI/UX Design
- **Responsive Layout:** Fully responsive design using **Tailwind CSS** and **DaisyUI**.
- **Animations:** Smooth page transitions and micro-interactions using **Framer Motion**.
- **Interactive Feedback:** SweetAlert2 for confirmations and React Hot Toast for notifications.

---

# 🛠️ Tech Stack

### Frontend
- **Framework:** React.js (Vite)
- **Styling:** Tailwind CSS, DaisyUI
- **State Management:** TanStack Query (React Query)
- **Forms:** React Hook Form
- **Routing:** React Router DOM
- **Visualization:** Recharts
- **Animations:** Framer Motion, Lottie React

### Backend
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB (Native Driver)
- **Auth:** JWT, Firebase Admin
- **Payment:** Stripe API

---

# 📦 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- MongoDB Connection String
- Firebase Project Keys
- Stripe Secret Key

### 1. Clone the Repositories
```bash
# Clone Client
git clone https://github.com/hasnatfahmidkhan/scholar-stream.git

# Clone Server
git clone https://github.com/hasnatfahmidkhan/scholar-stream-server.git
```

Start the server:
```bash
npm start
# or for development
npm run dev
```
# 📊 Database Collections
- **Users**: Stores user profiles and role data (Admin/Moderator/Student).
- **Scholarships**: Stores details about universities, fees, and scholarship criteria.
- **Applications**: Stores applicant data, payment status, and application status.
- **Reviews**: Stores student ratings and feedback for universities.
- **Wishlists**: Stores student wishlists for their fututre applications.

# 🔮 Future Improvements
- **Recommendation System**: AI-based scholarship suggestions based on user profile.
- **Chat System**: Live chat between students and moderators for support.
- **Email Notifications**: Automated emails for application status updates.

# 📞 Contact & Support
**Developed by Hasnat Fahmid Khan** <br/>
**GitHub: [hasnatfahmidkhan](https://github.com/hasnatfahmidkhan)**




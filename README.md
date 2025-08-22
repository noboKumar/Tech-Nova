# Tech Nova

Tech Nova is a modern e-commerce web application for tech gadgets, built with **Next.js 15**, **MongoDB**, and **NextAuth.js** for secure authentication. The platform allows users to browse products, view detailed information, and—if authenticated—manage products via an admin dashboard.

---

## 🚀 Features

- **Product Browsing:** Explore a wide range of tech gadgets.
- **Product Details:** View comprehensive information for each product.
- **Authentication:** Secure login and registration powered by NextAuth.js.
- **Admin Dashboard:** Authenticated users can add new products.
- **Responsive Design:** Optimized for desktop and mobile devices.
- **Real-Time Updates:** Instant product changes reflected across the app.

---

## 🛠️ Setup & Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/tech-nova.git
cd tech-nova
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file at the root of your project and add the following:

```
AUTH_SECRET=your_auth_secret
MONGODB_URI=your_mongodb_uri
AUTH_TRUST_HOST=true
MONGODB_DB=your_mongodb_database
```

### 4. Start the Development Server

```bash
npm run dev
```

---

## 🌐 Route Overview

### Public Routes

| Path             | Description                |
| ---------------- | -------------------------- |
| `/`              | Landing/Home page          |
| `/products`      | Products listing page      |
| `/products/[id]` | Individual product details |
| `/login`         | User login page            |
| `/register`      | User registration page     |

### Protected Routes (Dashboard)

| Path                     | Description       |
| ------------------------ | ----------------- |
| `/dashboard`             | Dashboard home    |
| `/dashboard/add-product` | Add a new product |

### API Routes

| Path                      | Description         |
| ------------------------- | ------------------- |
| `/api/auth/[...nextauth]` | Authentication APIs |
| `/api/products`           | Fetch all products  |
| `/api/register`           | Register a new user |

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🤝 Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements and bug fixes.

---

## 📧 Contact

For questions or support, please contact

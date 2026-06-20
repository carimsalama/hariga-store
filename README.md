# 🛍️ Hariga Store — MEAN Stack Product Listing App

A minimal MEAN stack application that displays a product catalog fetched from MongoDB via an Express.js REST API and rendered in Angular.

---

## 📁 Project Structure

```
hariga-store/
├── backend/                  # Node.js + Express API
│   ├── models/
│   │   └── Product.js        # Mongoose schema
│   ├── routes/
│   │   └── products.js       # GET /api/products
│   ├── .env                  # MongoDB URI & port
│   ├── seed.js               # Inserts the 3 products into MongoDB
│   └── server.js             # Express entry point
│
└── frontend/                 # Angular 19 app
    └── src/app/
        ├── models/
        │   └── product.model.ts
        ├── services/
        │   └── product.service.ts
        └── components/
            └── product-list/  # Displays the product cards
```

---

## ⚙️ Prerequisites

| Tool | Version |
|------|---------|
| Node.js | ≥ 18 |
| npm | ≥ 9 |
| Angular CLI | ≥ 19 (`npm i -g @angular/cli`) |
| MongoDB | Running locally on port `27017` |

---

## 🚀 Setup & Run

### 1 — Backend

```bash
cd backend
npm install
```

**Seed the database** (inserts the 3 products):
```bash
node seed.js
```

Expected output:
```
✅ Connected to MongoDB
🗑️  Cleared existing products
🌱 Products seeded successfully:
   • Headphones — $35 [Electronics]
   • Smart Watch — $50 [Electronics]
   • Laptop Bag — $20 [Accessories]
🔌 Disconnected
```

**Start the API server:**
```bash
npm start
```
Server runs at → `http://localhost:3000`

Test the API:
```
GET http://localhost:3000/api/products
```

---

### 2 — Frontend

```bash
cd frontend
npm install
ng serve
```

App runs at → `http://localhost:4200`

---

## 🗄️ Database

- **Database:** `hariga_store`
- **Collection:** `products`
- **Fields:** `name`, `price`, `category`

---

## 🔌 API Reference

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Returns all products |

**Response example:**
```json
{
  "success": true,
  "data": [
    { "name": "Headphones",  "price": 35, "category": "Electronics" },
    { "name": "Smart Watch", "price": 50, "category": "Electronics" },
    { "name": "Laptop Bag",  "price": 20, "category": "Accessories" }
  ]
}
```

---

## 🧱 Tech Stack

| Layer | Technology |
|-------|-----------|
| **M** | MongoDB + Mongoose |
| **E** | Express.js 4 |
| **A** | Angular 19 (Standalone) |
| **N** | Node.js 18+ |

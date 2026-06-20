require('dotenv').config();
const express   = require('express');
const mongoose  = require('mongoose');
const cors      = require('cors');

const productRoutes = require('./routes/products');

const app  = express();
const PORT = process.env.PORT || 3000;

// ── Middleware ────────────────────────────────────────────────
app.use(cors({ origin: 'http://localhost:4200' }));
app.use(express.json());

// ── Routes ────────────────────────────────────────────────────
app.use('/api/products', productRoutes);

// Health check
app.get('/', (req, res) => res.json({ message: 'Hariga Store API is running 🚀' }));

// ── Database + Server ─────────────────────────────────────────
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
  })
  .catch(err => {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1);
  });

require('dotenv').config();
const mongoose = require('mongoose');
const Product  = require('./models/Product');

const products = [
  { name: 'Headphones',  price: 35, category: 'Electronics'  },
  { name: 'Smart Watch', price: 50, category: 'Electronics'  },
  { name: 'Laptop Bag',  price: 20, category: 'Accessories'  },
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Connected to MongoDB');

    await Product.deleteMany({});
    console.log('🗑️  Cleared existing products');

    await Product.insertMany(products);
    console.log('🌱 Products seeded successfully:');
    products.forEach(p => console.log(`   • ${p.name} — $${p.price} [${p.category}]`));

    await mongoose.disconnect();
    console.log('🔌 Disconnected');
    process.exit(0);
  } catch (err) {
    console.error('❌ Seed error:', err.message);
    process.exit(1);
  }
}

seed();

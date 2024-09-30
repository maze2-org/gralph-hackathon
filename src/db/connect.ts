import mongoose from 'mongoose';

export const connectToMongo = async () => {
  try {
    await mongoose.connect(process.env.DB_URL as string);
    console.log('✅ Connected to MongoDB');
  } catch (error) {
    console.error('❌ Error connecting to MongoDB:', error);
    process.exit(1);  // Exit if the connection fails
  }
};

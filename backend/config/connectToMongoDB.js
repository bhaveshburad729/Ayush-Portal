const mongoose = require("mongoose");
const MONGO_URL = "mongodb://127.0.0.1:27017/AyushPortal";

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
  }
};

module.exports = connectToMongoDB;

require("dotenv").config();
const mongoose = require("mongoose");

function connect() {
  const mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: process.env.NODE_ENV !== "prod"
  };

  let connectionString = "mongodb+srv://lucky577:Lok22rk+@cluster0.8effy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
  if (process.env.NODE_ENV === "prod") {
    connectionString = process.env.MONGO_URI_PROD;
  }

  mongoose.connect(connectionString, mongooseOptions);
  mongoose.Promise = global.Promise;
  mongoose.connection.on("open", () => console.log(`MongoDB Connected`));
  mongoose.connection.on("error", console.error.bind(console, "MongoDB Error"));
}

module.exports = connect;

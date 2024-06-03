const app = require("./index");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const PORT = process.env.PORT || 8001;
const DB = process.env.DB;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(DB);
    if(process.env.NODE_ENV == 'production'){
      conn.set('autoIndex', false);
    }
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
});


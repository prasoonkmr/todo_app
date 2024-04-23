import mongoose from "mongoose";

const connDb = () => {
  try {
    mongoose.connect(process.env.DATABASE_URI);
    console.log("db connected...")
  } catch (error) {
    console.log(error);
  }
};
export default connDb;

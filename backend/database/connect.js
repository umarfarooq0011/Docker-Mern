// create a connection to our MongoDB database
import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect("mongodb://db:27017/anime");
    console.log("Connected to MongoDB".green);
  } catch (error) {
    console.error("Error connecting to MongoDB:".red, error);
  }
};

export default connect;


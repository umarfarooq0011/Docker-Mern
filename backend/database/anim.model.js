// create a task model
import mongoose from "mongoose";

const animSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
  },
  description: {
    type: String,
  },
});

export default mongoose.model("Anim", animSchema);


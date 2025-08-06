import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  role: { type: String, enum: ["LET_EM_COOK", "SHEF", "FIVE_STAR_MICHELIN"], default: "LET_EM_COOK" },
  score: { type: Number, default: 0 },
});

export default mongoose.model("User", userSchema);

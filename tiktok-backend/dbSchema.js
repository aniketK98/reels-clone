import mongoose from "mongoose";

const dbSchema = mongoose.Schema({
  videoUrl: String,
  profileName: String,
  profilePic: String,
  caption: String,
  songName: String,
  songPic: String,
  likes: Number,
  shares: Number,
  comments: Number,
});

export default mongoose.model("dbSchema", dbSchema);

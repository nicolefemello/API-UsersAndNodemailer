import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  emailsSent: [
    {
      to: String,
      subject: String,
      message: String,
      dateSent: Date,
    },
  ],
});

const user = mongoose.model("user", userSchema);

export default user;
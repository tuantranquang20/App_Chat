const mongoose = require("mongoose");
// const url = "mongodb://localhost:27017/natours";
const uri = "mongodb+srv://Grey:1234@chatapp.yj2uv.mongodb.net/ChatApp?retryWrites=true&w=majority"
mongoose.Promise = global.Promise;

// Connect MongoDB at default port 27017.
mongoose.connect(
  uri,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  },
  (err) => {
    if (!err) {
      console.log("MongoDB Connection Succeeded.");
    } else {
      console.log("Error in DB connection: " + err);
    }
  }
);

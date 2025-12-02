require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();
const PORT = 3000;

const userRoutes = require("./routes/user");
const contactRoutes = require("./routes/contact");
const requestRoutes = require("./routes/request");

app.use(
  cors({
    origin: ["http://localhost:5173", "https://sungha-rnf.netlify.app"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.options("*", cors());

app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());

app.use("/api/auth", userRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/request", requestRoutes);

app.get("/", (req, res) => {
  res.send("Hello world!");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MONGODB와 연결이 되었습니다."))
  .catch((error) => console.log("MONGODB와 실패이 되었습니다.", error));

app.listen(PORT, () => {
  console.log("server is running");
});

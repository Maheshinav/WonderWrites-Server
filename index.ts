import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./routes/userRoutes"; 

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({ origin: "http://localhost:3001" }));
app.use(express.json());

mongoose
  .connect("mongodb://localhost/usersdb", {
    serverSelectionTimeoutMS: 5000,
  })
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));


app.use("/api/signup", userRoutes);


app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

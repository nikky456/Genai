import express from "express";
import dotenv from "dotenv";
import uploadRoute from "./routes/uploadRoute.js";

app.use("/api", uploadRoute);

dotenv.config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("RAG Backend Running ");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
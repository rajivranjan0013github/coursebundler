import express from "express";
const app = express();
import { config } from "dotenv";
import cors from "cors";

config({
  path: "./config/config.env",
});

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/courses", (req, res) => {
  res.status(201).json({
    success: true,
    message: "this is course code",
  });
});

export default app;

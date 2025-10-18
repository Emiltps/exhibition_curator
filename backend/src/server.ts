import express from "express";
import "dotenv/config";
import cors from "cors";
import artworksRouter from "./routes/artworks.js";

export const app = express();

console.log("HARVARD_API_KEY loaded:", !!process.env.HARVARD_API_KEY);

const frontendOrigin =
  process.env.NODE_ENV === "production"
    ? "https://exhibition-curator-1.onrender.com"
    : "*";

app.use(
  cors({
    origin: frontendOrigin,
  })
);

app.use(express.json());
app.use("/api/artworks", artworksRouter);

app.get("/", (req, res) => {
  res.send("Exhibition Curator Backend is running");
});

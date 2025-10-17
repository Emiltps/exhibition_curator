import express from "express";
import "dotenv/config";
import artworksRouter from "./routes/artworks.js";

export const app = express();

console.log("HARVARD_API_KEY loaded:", !!process.env.HARVARD_API_KEY);

//Route to fetch artwork
app.use(express.json());
app.use("/api/artworks", artworksRouter);

//Route to project root
app.get("/", (req, res) => {
  res.send("Exhibition Curator Backend is running");
});

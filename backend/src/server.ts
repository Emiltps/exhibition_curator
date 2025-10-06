import express from "express";
import cors from "cors";
import artworksRouter from "./routes/artworks.js";

export const app = express();

app.use(cors());
app.use(express.json());

// Route to fetch artworks
app.use("/api/artworks", artworksRouter);

//Route to project root
app.get("/", (req, res) => {
  res.send("Exhibition Curator Backend is running");
});

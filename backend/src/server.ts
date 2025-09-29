import express from "express";
import cors from "cors";
import fetch from "node-fetch";

export const app = express();

app.use(cors());

// Example API route
app.get("/api/search", async (req, res) => {
  const term = req.query.term || "Rembrandt";

  try {
    const response = await fetch(
      `https://collectionapi.metmuseum.org/public/collection/v1/search?q=${term}`
    );
    const data = await response.json();

    res.json({ source: "MetMuseum", data });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch artworks" });
  }
});

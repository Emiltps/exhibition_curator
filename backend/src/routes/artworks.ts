import { Router } from "express";
import { fetchMetArtworks } from "../services/metMuseum.js";

const router = Router();

router.get("/", async (req, res) => {
  const term = (req.query.term as string) || "Rembrandt";

  try {
    // Fetch from Met Museum API
    const artworks = await fetchMetArtworks(term);

    res.json({ source: "MetMuseum", artworks });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch artworks" });
  }
});

export default router;

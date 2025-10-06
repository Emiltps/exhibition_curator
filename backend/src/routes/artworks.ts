import { Router } from "express";
import { fetchMetArtworks } from "../services/metMuseum.js";
import { fetchRijksArtworks } from "../services/rijksMuseum.js";

const router = Router();

router.get("/", async (req, res) => {
  const term = (req.query.term as string) || "Rembrandt";

  try {
    const [metArtworks, rijksArtworks] = await Promise.all([
      fetchMetArtworks(term),
      fetchRijksArtworks(term),
    ]);
    const artworks = [...metArtworks, ...rijksArtworks];

    res.json({ artworks });
  } catch (err) {
    console.error("Error fetching artworks:", err);
    res.status(500).json({ error: "Failed to fetch artworks" });
  }
});

export default router;

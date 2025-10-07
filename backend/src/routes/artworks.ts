import { Router } from "express";
import { fetchMetArtworks } from "../services/metMuseum.js";
import { HarvardApiService, mapHarvardToArtwork } from "../services/harvard.js";

const router = Router();

const harvardKey = process.env.HARVARD_API_KEY;
if (!harvardKey) throw new Error("HARVARD_API_KEY not set in .env");

const harvardService = new HarvardApiService(
  "https://api.harvardartmuseums.org",
  harvardKey
);

router.get("/", async (req, res) => {
  const term = (req.query.term as string) || "Rembrandt";

  try {
    const [metArtworks, harvardObjects] = await Promise.all([
      fetchMetArtworks(term),
      harvardService.searchObjects(term, 10),
    ]);

    const harvardArtworks = harvardObjects.map(mapHarvardToArtwork);

    const artworks = [...metArtworks, ...harvardArtworks];

    res.json({ artworks });
  } catch (err) {
    console.error("Error fetching artworks:", err);
    res.status(500).json({ error: "Failed to fetch artworks" });
  }
});

export default router;

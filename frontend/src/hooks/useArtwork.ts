import { useState } from "react";

export interface Artwork {
  objectID: number;
  title: string;
  artist: string;
  date: string;
  primaryImageSmall: string;
  objectURL: string;
  source: string;
}
const BASE_URL = import.meta.env.VITE_API_BASE_URL; //

export function useArtworks() {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchArtworks = async (term: string) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(
        `${BASE_URL}/api/artworks?term=${encodeURIComponent(term)}`
      );
      if (!res.ok) throw new Error("Network response was not ok");
      const json = await res.json();

      setArtworks(json.artworks || []);
    } catch (err) {
      console.error(err);
      setError("Failed to load artworks");
    } finally {
      setLoading(false);
    }
  };

  return { artworks, loading, error, fetchArtworks };
}

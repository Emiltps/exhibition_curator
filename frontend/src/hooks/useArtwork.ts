import { useState } from "react";

export interface Artwork {
  objectID: number;
  title: string;
  primaryImageSmall: string;
}

export function useArtworks() {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchArtworks = async (term: string) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/search?term=${encodeURIComponent(term)}`);
      const json = await res.json();

      // The Met API returns objectIDs first; you might want to fetch details for each one later.
      setArtworks(json.data.objectIDs?.slice(0, 10) || []);
    } catch {
      setError("Failed to load artworks");
    } finally {
      setLoading(false);
    }
  };

  return { artworks, loading, error, fetchArtworks };
}

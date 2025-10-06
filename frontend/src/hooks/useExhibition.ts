import { useState } from "react";
import type { Artwork } from "./useArtwork";

export function useExhibition() {
  const [collection, setCollection] = useState<Artwork[]>([]);

  // Add an artwork to the collection if not already added
  const addArtwork = (art: Artwork) => {
    setCollection((prev) =>
      prev.find((a) => a.objectID === art.objectID) ? prev : [...prev, art]
    );
  };

  // Remove artwork
  const removeArtwork = (id: number) => {
    setCollection((prev) => prev.filter((a) => a.objectID !== id));
  };

  // Clear the collection
  const clearCollection = () => setCollection([]);

  return { collection, addArtwork, removeArtwork, clearCollection };
}

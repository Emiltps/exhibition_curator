import { useState } from "react";
import type { Artwork } from "./useArtwork";

export function useExhibition() {
  const [collection, setCollection] = useState<Artwork[]>([]);

  // Add an artwork to the collection if not already added
  const addArtwork = (art: Artwork) => {
    console.log("Adding to exhibition:", art.title);
    setCollection((prev) =>
      prev.find((a) => a.objectID === art.objectID) ? prev : [...prev, art]
    );
  };

  // Remove artwork
  const removeArtwork = (art: Artwork) => {
    setCollection((prev) => prev.filter((a) => a.objectID !== art.objectID));
  };

  // Clear the collection
  const clearCollection = () => setCollection([]);

  return { collection, addArtwork, removeArtwork, clearCollection };
}

import { useState } from "react";
import type { Artwork } from "./useArtwork";

export function useExhibition() {
  const [collection, setCollection] = useState<Artwork[]>([]);

  const addArtwork = (art: Artwork) => {
    console.log("Adding to exhibition:", art.title);
    setCollection((prev) =>
      prev.find((a) => a.objectID === art.objectID) ? prev : [...prev, art]
    );
  };

  const removeArtwork = (art: Artwork) => {
    setCollection((prev) => prev.filter((a) => a.objectID !== art.objectID));
  };

  const clearCollection = () => setCollection([]);

  return { collection, addArtwork, removeArtwork, clearCollection };
}

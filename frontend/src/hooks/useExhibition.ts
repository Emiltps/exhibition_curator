import { useState } from "react";
import type { Artwork } from "./useArtwork";

export function useExhibition() {
  const [collection, setCollection] = useState<Artwork[]>([]);
}

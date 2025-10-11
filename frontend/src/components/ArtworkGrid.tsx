import type { Artwork } from "../hooks/useArtwork";

interface Props {
  artworks: Artwork[];
  onSelect?: (art: Artwork) => void;
  isInCollection?: (id: number) => boolean;
  mode?: "search" | "collection";
}

export default function ArtworkGrid({
  artworks,
  onSelect,
  isInCollection,
  mode = "search",
}: Props) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {artworks.map((art) => {
        const added = isInCollection?.(art.objectID);
        return (
          <div
            key={art.objectID}
            className="bg-white rounded-xl shadow p-2 relative"
          >
            <a href={art.objectURL} target="_blank" rel="noopener noreferrer">
              {art.primaryImageSmall ? (
                <img
                  src={art.primaryImageSmall}
                  alt={art.title}
                  className="rounded-md w-full object-cover"
                />
              ) : (
                <div className="bg-gray-200 h-40 flex items-center justify-center text-gray-400">
                  No image
                </div>
              )}
            </a>

            <p className="mt-2 text-sm text-center font-semibold">
              {art.title}
            </p>
            <p className="text-xs text-center text-gray-500">{art.artist}</p>

            <span className="absolute top-2 right-2 bg-black text-white text-[10px] px-1 py-0.5 rounded">
              {art.source}
            </span>

            {onSelect && (
              <button
                onClick={(e) => {
                  e.preventDefault(); // prevents <a> click navigation
                  e.stopPropagation();
                  onSelect(art);
                }}
                className={`mt-2 w-full text-xs rounded p-1 ${
                  mode === "search"
                    ? added
                      ? "bg-gray-400 text-white cursor-not-allowed"
                      : "bg-black text-white"
                    : "bg-red-500 text-white"
                }`}
                disabled={mode === "search" && added}
              >
                {" "}
                {mode === "search"
                  ? added
                    ? "Added ✓"
                    : "Add to Exhibition"
                  : "Remove from Exhibition"}
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}

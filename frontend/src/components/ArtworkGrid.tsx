import type { Artwork } from "../hooks/useArtwork";

interface Props {
  artworks: Artwork[];
}

export default function ArtworkGrid({ artworks }: Props) {
  if (!artworks.length) {
    return <p className="text-center text-gray-500 mt-4">No artworks yet.</p>;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
      {artworks.map((art) => (
        <div key={art.objectID} className="bg-white rounded-xl shadow p-2">
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
          <p className="mt-2 text-sm text-center">{art.title}</p>
        </div>
      ))}
    </div>
  );
}

import { useState } from "react";
import ArtworkGrid from "./components/ArtworkGrid";
import { useArtworks } from "./hooks/useArtwork";
import { useExhibition } from "./hooks/useExhibition";

export default function App() {
  const [term, setTerm] = useState("");
  const { artworks, loading, error, fetchArtworks } = useArtworks();
  const { collection, addArtwork, removeArtwork } = useExhibition();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (term.trim()) fetchArtworks(term);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="p-4 bg-white shadow">
        <h1 className="text-2xl font-bold text-center">Exhibition Curator</h1>
      </header>

      <main className="p-4 max-w-xl mx-auto">
        <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Search artworks..."
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="flex-grow border rounded-lg px-3 py-2"
          />
          <button
            type="submit"
            className="bg-black text-white rounded-lg px-4 py-2"
          >
            Search
          </button>
        </form>

        {loading && <p className="text-center text-gray-500">Loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        {artworks.length > 0 && (
          <>
            <h2 className="text-xl font-semibold mb-2">Search Results</h2>
            <ArtworkGrid artworks={artworks} onSelect={addArtwork} />
          </>
        )}

        {collection.length > 0 && (
          <>
            <h2 className="text-xl font-semibold mb-2">Your Exhibition</h2>
            <ArtworkGrid
              artworks={collection}
              onSelect={(art) => removeArtwork(art.objectID)}
            />
          </>
        )}
      </main>
    </div>
  );
}

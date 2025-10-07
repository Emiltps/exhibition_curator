export interface MetArtwork {
  objectID: number;
  title: string;
  artist: string;
  date: string;
  primaryImageSmall: string;
  objectURL: string;
  source: string;
}

export async function fetchMetArtworks(term: string): Promise<MetArtwork[]> {
  const searchRes = await fetch(
    `https://collectionapi.metmuseum.org/public/collection/v1/search?q=${encodeURIComponent(
      term
    )}`
  );
  const searchData = await searchRes.json();

  if (!searchData.objectIDs) return [];

  const objectIDs = searchData.objectIDs.slice(0, 10); // first 10 results

  // Fetch details for each artwork
  const detailPromises = objectIDs.map(async (id: number) => {
    const res = await fetch(
      `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
    );
    const data = await res.json();
    return {
      objectID: data.objectID,
      title: data.title,
      artist: data.artistDisplayName,
      date: data.objectDate,
      primaryImageSmall: data.primaryImageSmall,
      objectURL: data.objectURL,
      source: "Met Museum",
    };
  });

  return Promise.all(detailPromises);
}

export interface RijksArtwork {
  objectNumber: string;
  title: string;
  artist: string;
  date: string;
  primaryImageSmall: string;
  objectURL: string;
}

export async function fetchRijksArtworks(
  term: string
): Promise<RijksArtwork[]> {
  const searchRes = await fetch(
    `https://www.rijksmuseum.nl/api/en/collection?q=${encodeURIComponent(
      term
    )}&imgonly=True&ps=10`
  );

  const searchData = await searchRes.json();

  if (!searchData.artObjects) return [];

  const artworks = searchData.artObjects.map((item: any) => ({
    objectID: parseInt(item.objectNumber.replace(/\D/g, "")) || 0,
    title: item.title,
    artist: item.principalOrFirstMaker,
    date: item.longTitle?.match(/\d{4}/)?.[0] || "",
    primaryImageSmall: item.webImage?.url || "",
    objectURL: item.links?.web || "",
    source: "Rijksmuseum",
  }));

  return artworks;
}

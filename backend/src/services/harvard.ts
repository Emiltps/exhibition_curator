export interface HarvardObject {
  id: number;
  title: string;
  people?: Array<{ name: string }>;
  dated?: string;
  primaryimageurl?: string;
  images?: Array<{ baseimageurl: string }>;
  url?: string;
}

export interface HarvardApiResponse {
  records: HarvardObject[];
}

export class HarvardApiService {
  private baseUrl: string;
  private apiKey: string;

  constructor(baseUrl: string, apiKey: string) {
    this.baseUrl = baseUrl;
    this.apiKey = apiKey;
  }

  /**
   * Search objects by keyword (free-text) with images
   */
  async searchObjects(
    searchQuery: string,
    limit = 10
  ): Promise<HarvardObject[]> {
    if (!searchQuery?.trim()) return [];

    const params = new URLSearchParams({
      apikey: this.apiKey,
      hasimage: "1",
      keyword: searchQuery.trim(),
      size: limit.toString(),
      page: "1",
    });

    const url = `${this.baseUrl}/object?${params}`;
    console.log(`Fetching Harvard API: ${url}`);

    try {
      const res = await fetch(url);
      if (!res.ok) {
        const errText = await res.text();
        console.error(`Harvard API error: ${res.status}`, errText);
        return [];
      }

      const data: HarvardApiResponse = await res.json();
      return data.records || [];
    } catch (err) {
      console.error("Error fetching Harvard objects:", err);
      return [];
    }
  }
}

/**
 * Map Harvard object to unified artwork format
 */
export function mapHarvardToArtwork(harvard: HarvardObject) {
  return {
    objectID: harvard.id,
    title: harvard.title,
    artist: harvard.people?.[0]?.name || "Unknown",
    date: harvard.dated || "",
    primaryImageSmall:
      harvard.primaryimageurl || harvard.images?.[0]?.baseimageurl || "",
    objectURL: harvard.url || "",
    source: "Harvard Art Museums",
  };
}

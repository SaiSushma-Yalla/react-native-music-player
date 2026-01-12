// src/api/apiSaavnApi.ts

export interface Song {
  id: string;
  name: string;
  primaryArtists: string;
  downloadUrl: { quality: string; url: string }[];
}

const BASE_URL = 'https://saavn.sumit.co/api';

export const searchSongs = async (query: string): Promise<Song[]> => {
  try {
    const res = await fetch(
      `${BASE_URL}/search/songs?query=${encodeURIComponent(query)}`
    );

    const json = await res.json();

    console.log('API RESPONSE:', json); // 🔴 IMPORTANT

    return json?.data?.results ?? [];
  } catch (e) {
    console.log('Search error:', e);
    return [];
  }
};

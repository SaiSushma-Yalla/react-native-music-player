// src/types/song.ts
export interface Song {
  id: string;
  name: string;
  primaryArtists: string;
  downloadUrl: string;
  image?: string; // optional
}

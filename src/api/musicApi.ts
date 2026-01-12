// src/api/musicApi.ts
import { Song } from '../types/song';

export const getAllSongs = async (): Promise<Song[]> => {
  return [
    {
      id: '1',
      name: 'Channa Mereya',
      primaryArtists: 'Arijit Singh',
      image: 'https://i.scdn.co/image/ab67616d0000b2739d5b0f8237b0ed208a6b5f4c',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
      downloadUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    },
    {
      id: '2',
      name: 'Raabta',
      primaryArtists: 'Arijit Singh, Hamsika Iyer',
      image: 'https://i.scdn.co/image/ab67616d0000b2731d4a0d8f5a0f7a2b5c987e91',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
      downloadUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    },
    {
      id: '3',
      name: 'Tum Hi Ho',
      primaryArtists: 'Arijit Singh',
      image: 'https://i.scdn.co/image/ab67616d0000b2733b7f1d0d3c8c5d1a5a4f7f19',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
      downloadUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    },
    {
      id: '4',
      name: 'Tera Ban Jaunga',
      primaryArtists: 'Akhil Sachdeva, Tulsi Kumar',
      image: 'https://i.scdn.co/image/ab67616d0000b2739c2b0a5d6e5e6b6a7b8c9d0e',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
      downloadUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    },
  ];
};


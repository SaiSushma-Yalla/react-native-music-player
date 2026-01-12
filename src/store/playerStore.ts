import { create } from 'zustand';
import { Audio } from 'expo-av';
import { Song } from '../types/song';

interface PlayerState {
  currentSong: Song | null;
  isPlaying: boolean;
  sound: Audio.Sound | null;
  playSong: (song: Song) => Promise<void>;
  pauseSong: () => Promise<void>;
  resumeSong: () => Promise<void>;
  stopSong: () => Promise<void>;
}

const usePlayerStore = create<PlayerState>((set, get) => ({
  currentSong: null,
  isPlaying: false,
  sound: null,

  playSong: async (song: Song) => {
    try {
      // Stop current song if any
      if (get().sound) {
        await get().sound.stopAsync();
        await get().sound.unloadAsync();
      }

      const { sound } = await Audio.Sound.createAsync(
        { uri: song.url },
        { shouldPlay: true }
      );

      set({ currentSong: song, isPlaying: true, sound });

    } catch (error) {
      console.log('Error playing song:', error);
    }
  },

  pauseSong: async () => {
    if (get().sound && get().isPlaying) {
      await get().sound.pauseAsync();
      set({ isPlaying: false });
    }
  },

  resumeSong: async () => {
    if (get().sound && !get().isPlaying) {
      await get().sound.playAsync();
      set({ isPlaying: true });
    }
  },

  stopSong: async () => {
    if (get().sound) {
      await get().sound.stopAsync();
      await get().sound.unloadAsync();
      set({ currentSong: null, isPlaying: false, sound: null });
    }
  },
}));

export default usePlayerStore;









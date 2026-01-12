import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import usePlayerStore from '../store/playerStore';

const PlayerScreen: React.FC = () => {
  const currentSong = usePlayerStore((state) => state.currentSong);
  const isPlaying = usePlayerStore((state) => state.isPlaying);
  const pauseSong = usePlayerStore((state) => state.pauseSong);
  const resumeSong = usePlayerStore((state) => state.resumeSong);
  const stopSong = usePlayerStore((state) => state.stopSong);

  if (!currentSong) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No song is playing</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Song Artwork */}
      {currentSong.image && (
        <Image source={{ uri: currentSong.image }} style={styles.songImage} />
      )}

      {/* Song Details */}
      <Text style={styles.songTitle}>{currentSong.name}</Text>
      <Text style={styles.songArtist}>{currentSong.primaryArtists}</Text>

      {/* Controls */}
      <View style={styles.controls}>
        <TouchableOpacity
          onPress={() => (isPlaying ? pauseSong() : resumeSong())}
          style={styles.button}
        >
          <Text style={styles.buttonText}>{isPlaying ? '⏸ Pause' : '▶️ Play'}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={stopSong} style={styles.button}>
          <Text style={styles.buttonText}>⏹ Stop</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  emptyContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  emptyText: { fontSize: 18, color: '#666' },
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 },
  songImage: { width: 250, height: 250, borderRadius: 16, marginBottom: 20 },
  songTitle: { fontSize: 24, fontWeight: 'bold', marginBottom: 8, textAlign: 'center' },
  songArtist: { fontSize: 18, color: '#666', marginBottom: 20, textAlign: 'center' },
  controls: { flexDirection: 'row', justifyContent: 'space-around', width: '80%' },
  button: { padding: 12, backgroundColor: '#1DB954', borderRadius: 8 },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});

export default PlayerScreen;



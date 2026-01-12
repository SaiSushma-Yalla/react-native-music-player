import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { getAllSongs } from '../api/musicApi';
import { Song } from '../types/song';
import usePlayerStore from '../store/playerStore';

const HomeScreen: React.FC = () => {
  const [songs, setSongs] = useState<Song[]>([]);
  const playSong = usePlayerStore((state) => state.playSong);
  const pauseSong = usePlayerStore((state) => state.pauseSong);
  const resumeSong = usePlayerStore((state) => state.resumeSong);
  const currentSong = usePlayerStore((state) => state.currentSong);
  const isPlaying = usePlayerStore((state) => state.isPlaying);

  useEffect(() => {
    getAllSongs().then(setSongs);
  }, []);

  const handleSongPress = (song: Song) => {
    if (currentSong?.id === song.id && isPlaying) {
      pauseSong();
    } else if (currentSong?.id === song.id && !isPlaying) {
      resumeSong();
    } else {
      playSong(song);
    }
  };

  const renderItem = ({ item }: { item: Song }) => (
    <TouchableOpacity style={styles.songItem} onPress={() => handleSongPress(item)}>
      {item.image && <Image source={{ uri: item.image }} style={styles.songImage} />}
      <View style={{ marginLeft: 10 }}>
        <Text style={styles.songTitle}>{item.name}</Text>
        <Text style={styles.songArtist}>{item.primaryArtists}</Text>
        {currentSong?.id === item.id && (
          <Text style={{ color: 'green' }}>{isPlaying ? 'Playing...' : 'Paused'}</Text>
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Songs</Text>
      <FlatList
        data={songs}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 80 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { fontSize: 24, fontWeight: 'bold', margin: 16 },
  songItem: { flexDirection: 'row', alignItems: 'center', padding: 12, borderBottomWidth: 1, borderBottomColor: '#ccc' },
  songImage: { width: 50, height: 50, borderRadius: 8 },
  songTitle: { fontSize: 18, fontWeight: '500' },
  songArtist: { fontSize: 14, color: '#666' },
});

export default HomeScreen;



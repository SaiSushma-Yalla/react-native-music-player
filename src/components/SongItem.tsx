import { TouchableOpacity, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function SongItem({ song }: any) {
  const navigation = useNavigation<any>();

  const handlePress = () => {
    navigation.navigate("Player", { songId: song.id });
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={{ padding: 10 }}>
        <Text>{song.name}</Text>
        <Text>{song.primaryArtists}</Text>
      </View>
    </TouchableOpacity>
  );
}



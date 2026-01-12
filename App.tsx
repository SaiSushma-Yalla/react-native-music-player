// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import PlayerScreen from './src/screens/PlayerScreen';

// Stack parameter types
export type RootStackParamList = {
  Home: undefined;
  Player: { songId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // 🔹 Add an explicit id here to fix the TypeScript error
        id="root-stack"
        initialRouteName="Home"
        screenOptions={{ headerTitleAlign: 'center' }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Arijit Singh Songs' }}
        />
        <Stack.Screen
          name="Player"
          component={PlayerScreen}
          options={{ title: 'Now Playing' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}




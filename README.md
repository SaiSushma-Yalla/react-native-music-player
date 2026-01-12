 React Native Music Player App
 Project Overview

This is a simple React Native music player application built using Expo.
The app displays a list of songs and allows the user to play, pause.

This project was developed as part of an  assignment to understand:

React Native fundamentals

State management

Audio playback in mobile apps

Features

List of songs displayed on the home screen

Tap on a song to play it

Play / Pause functionality

Simple and clean UI

Works on Android using Expo

🛠 Tech Stack

React Native

Expo

TypeScript

Zustand (for global state management)

expo-av (for audio playback)

 Project Structure
music-player/
│
├── src/
│   ├── api/
│   │   └── musicApi.ts
│   ├── screens/
│   │   ├── HomeScreen.tsx
│   │   └── PlayerScreen.tsx
│   ├── store/
│   │   └── playerStore.ts
│   ├── types/
│   │   └── song.ts
│
├── App.tsx
├── package.json
└── README.md

 Music Source

Songs are fetched from a custom music API file (musicApi.ts) which returns a list of song objects containing:

Song name

Artist name

This approach was used to keep the app simple and stable for assignment submission.

 How the App Works

Home screen loads the list of songs

User taps on any song to play it

Tapping the same song again pauses/resumes playback

Audio state is managed using Zustand store

 How to Run the Project
Prerequisites

Node.js (v18+)

Expo CLI

Android Emulator or physical Android device

Steps
npm install
npx expo start


Then:

Press a to run on Android emulator

OR scan QR code using Expo Go app

 Notes

This project is intended for learning and assignment purposes

No backend server is used

Audio files are streamed from public URLs

The focus is on functionality, not advanced UI design


 Author

B.Tech Final Year Student
YALLA GNK SAI SUSHMA

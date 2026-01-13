 1. Music Player App – React Native (Expo + TypeScript)
 2.Overview

 This project is a music player application built using React Native (Expo) with TypeScript.
 The goal of the assignment was to demonstrate audio playback handling, state synchronization, and application architecture rather than UI completeness.

 The app showcases a working end-to-end player flow under tight time constraints.

 3.Tech Stack

 React Native (Expo)

 TypeScript

 React Navigation v6

 Zustand (global state management)

 Expo AV (audio playback)

 4.Implemented Features

 Home screen displaying a list of songs

 Audio playback with play / pause

 Player screen synced with playback state

 Centralized player state using Zustand

 Stable playback without crashes

 5.Search Functionality (Note)

 Search functionality was implemented during development but was disabled in the final submission due to instability introduced close to the deadline.
 The final build prioritizes stable playback and application flow over feature completeness.

 6.API & Audio Implementation Note (Important)

 The assignment initially targeted the JioSaavn API. During development, multiple third-party music APIs (including Saavn and Jamendo) were explored.
 Due to reliability issues with audio URLs and the limited time window, a placeholder public MP3 source was used in the final build to validate and demonstrate

 7.Audio playback lifecycle

 Player state management

 Screen synchronization logic

 The metadata structure follows a Saavn-like schema, and the API layer is isolated, making it straightforward to replace the placeholder audio source with Saavn streams once stable.

 This trade-off was made intentionally to ensure a working, evaluatable application rather than a broken or incomplete submission.

 8.Architecture Notes

 API/data logic is separated from UI components

 Global player state (current song, playback status) is managed using Zustand

 Audio logic is decoupled from UI rendering to avoid playback interruptions

 Screens subscribe to shared state to remain in sync

 9.Limitations

 Placeholder audio source used instead of Saavn streams

 Search functionality disabled in final build

 Queue management and mini player persistence not completed

 10.Future Improvements

 Full JioSaavn API integration once stable

 Re-enable search with debounced API calls

 Queue management with persistence

 Mini player UX improvements

 Background playback enhancements

 11. Project Structure

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

 12.How the App Works

 Home screen loads the list of songs

 User taps on any song to play it

 Tapping the same song again pauses playback

 Audio state is managed using Zustand store

 13.How to Run the Project

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

 14. Notes

 This project is intended for learning and assignment purposes

 No backend server is used

 The focus is on functionality, not advanced UI design

 15.Final Note

 This submission focuses on engineering decisions, stability, and clarity under time constraints.
 All limitations are documented transparently.


 16. Author

 B.Tech Final Year Student
 YALLA GNK SAI SUSHMA

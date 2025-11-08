# YouTube Clone

A modern YouTube clone built with React.js that implements core YouTube features including video playback, live chat, and comments.

## Features

- 📱 Responsive Design
- 🎥 Video Playback
- 💬 Live Chat with Real-time Updates
- 💭 Comments Section
- 🔍 Search Functionality with Debouncing
- 🎯 Redux for State Management
- 🎨 Tailwind CSS for Styling

## Tech Stack

- React.js
- Redux Toolkit for state management
- React Router for navigation
- Tailwind CSS for styling
- YouTube API integration

## Key Components

- `WatchPage`: Video playback with live chat integration
- `LiveChat`: Real-time chat functionality
- `CommentsContainer`: Nested comments system
- `MainContainer`: Home page with video grid
- `ButtonList`: Category-based filtering
- `Header`: Search and navigation component

## Performance Optimizations

### Search Debouncing
- Implements 200ms debouncing for search API calls
- Reduces API calls from potentially 14,000 to just 3 per 1000 keystrokes
- Improved performance by declining API calls for keystrokes under 200ms apart

### Caching
- Implemented efficient caching using objects for O(1) time complexity
- Search suggestions are cached for faster repeated queries

## Getting Started

1. Clone the repository
```bash
git clone https://github.com/Viswa07dev/my_youtube.git
```

2. Install dependencies
```bash
cd my_youtube
npm install
```

3. Create a `.env` file in the root directory and add your YouTube API key:
```bash
REACT_APP_GOOGLE_API_KEY=your_api_key_here
```

4. Start the development server
```bash
npm start
```

## Project Structure

```
src/
  ├── components/       # React components
  ├── utils/           # Helper functions and store
  ├── App.js           # Main app component
  └── index.js         # Entry point
```

## Features in Detail

- **Video Playback**: Embedded YouTube player with custom controls
- **Live Chat**: Real-time chat simulation with Redux management
- **Search**: Optimized YouTube search suggestions with debouncing
- **Comments**: Nested comments system with threaded replies


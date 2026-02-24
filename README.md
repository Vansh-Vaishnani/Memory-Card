# Pokemon Memory Card Game

A interactive memory card game built with React as part of The Odin Project curriculum. Test your memory by clicking on Pokemon cards without repeating any selections.

## Purpose

This project was created as part of The Odin Project's React course to demonstrate proficiency in React fundamentals, including state management, component composition, and working with external APIs.

## Learning Objectives

Through building this project, the following concepts were practiced and reinforced:

- **React Hooks**: Utilizing `useState` and `useEffect` for state management and side effects
- **Component Architecture**: Breaking down the UI into reusable, modular components
- **Event Handling**: Managing user interactions and updating state accordingly
- **API Integration**: Fetching data from external APIs (PokeAPI) and handling asynchronous operations
- **Conditional Rendering**: Displaying different UI elements based on application state
- **Array Manipulation**: Shuffling arrays and tracking user selections
- **Props**: Passing data and functions between parent and child components
- **CSS Styling**: Creating a responsive and visually appealing user interface

## Features

- Fetches Pokemon data dynamically from the PokeAPI
- Randomizes card positions after each click
- Tracks current score and best score
- Win condition detection with congratulatory message
- Interactive instructions modal explaining game rules
- Responsive design for various screen sizes
- Visual feedback on hover and card interactions
- Game restart functionality

## Technologies Used

- **React** - Frontend library for building user interfaces
- **Vite** - Build tool and development server
- **PokeAPI** - External API for Pokemon data
- **CSS3** - Styling and animations
- **JavaScript ES6+** - Modern JavaScript features

## How It Works

The game logic is straightforward:

1. On mount, the application fetches 12 Pokemon from the PokeAPI
2. Cards are displayed in a grid and shuffled after each click
3. Players must click each Pokemon card exactly once
4. Clicking a previously selected card resets the score to zero
5. Clicking all cards without repetition triggers the win condition
6. The best score persists throughout the session

## Installation and Setup

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Steps

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd Memory-Card
   ```

2. Install dependencies:
   ```bash
   npm run install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to the local server address (typically `http://localhost:5173`)

## Project Structure

```
memory-card-game/
├── src/
│   ├── components/
│   │   ├── Card.jsx           # Individual card component
│   │   ├── CardGrid.jsx       # Grid container for cards
│   │   ├── Modal.jsx          # Reusable modal component
│   │   └── Scoreboard.jsx     # Score display component
│   ├── App.jsx                # Main application component
│   ├── App.css                # Application styles
│   ├── index.css              # Global styles
│   └── main.jsx               # Application entry point
├── public/                    # Static assets
├── index.html                 # HTML template
├── package.json               # Project dependencies
└── vite.config.js             # Vite configuration
```

## Key Components

### App.jsx
The main component that manages application state, including:
- Card data from API
- Score tracking
- Clicked cards history
- Modal visibility states
- Game logic and win condition

### Card.jsx
Renders individual Pokemon cards with image and name, handling click events.

### CardGrid.jsx
Container component that maps through the cards array and renders Card components.

### Modal.jsx
Reusable modal component for displaying instructions and win messages.

### Scoreboard.jsx
Displays the current score and best score achieved during the session.

## Challenges and Solutions

### Challenge 1: Preventing Re-renders on Card Shuffle
**Solution**: Used functional state updates to ensure the shuffling operation doesn't cause unnecessary re-renders.

### Challenge 2: Managing Multiple Async API Calls
**Solution**: Implemented `Promise.all()` to fetch detailed Pokemon data concurrently, improving load times.

### Challenge 3: React Hook Dependencies
**Solution**: Moved the fetch function inside `useEffect` to eliminate dependency warnings and follow React best practices.

## Future Enhancements

- Difficulty levels with varying numbers of cards
- Timer mode for speed challenges
- Leaderboard with persistent high scores using local storage
- Different Pokemon generations to choose from
- Sound effects and animations
- Dark/light theme toggle

## Acknowledgments

- Project specification from [The Odin Project](https://www.theodinproject.com/)
- Pokemon data provided by [PokeAPI](https://pokeapi.co/)
- Pokemon assets and imagery are property of Nintendo/Game Freak


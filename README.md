# 🧩 Nonograms Game

Welcome to **Nonograms**, a classic Japanese puzzle game where logic meets mystery! 🧠  
Your task? Uncover hidden pixel-art pictures by decoding the number clues along the rows and columns — no guessing required, just pure brainpower.

Play it here 👉 [Live Demo](https://tatsianakuryla.github.io/nonograms-game/nonograms/)

---

## 📚 Table of Contents

- [🎮 Game Overview](#-game-overview)
- [🚀 Live Demo](#-live-demo)
- [🛠 Features](#-features)
- [📦 Project Structure](#-project-structure)
- [🧑‍💻 Installation](#-installation)
- [🧪 Technologies Used](#-technologies-used)
- [✅ Game Rules](#-game-rules)

---

## 🎮 Game Overview

**Nonograms** (also known as Picross or Griddlers) is a grid-based logic puzzle where numeric clues guide you to fill in the correct cells to reveal a hidden image.

In this version:
- Choose from multiple difficulty levels (5×5, 10×10, 15×15)
- Pick from a variety of pre-designed puzzles or try your luck with a random one
- Track your time, save your progress, and even view a leaderboard of your best solves

---

## 🚀 Live Demo

Try it online now:  
🔗 [https://tatsianakuryla.github.io/nonograms-game/nonograms/](https://tatsianakuryla.github.io/nonograms-game/nonograms/)

---

## 🛠 Features

### ✅ Core Gameplay
- Interactive grid with number-based clues
- Left-click to fill a cell (black)
- Right-click to cross a cell (X)
- Automatically detects win state
- Win message with elapsed time

### 💡 Game Logic
- Clues are logically generated and guide the solution
- Bold dividers every 5 cells (rows/columns)
- Fully playable without reloading the page

### 🧩 Puzzle System
- 5+ preloaded puzzles for each difficulty
- Ability to choose puzzle by name or preview image
- Random puzzle mode for spontaneous gameplay

### 🕹️ Advanced Features
- Save and continue games using `localStorage`
- Restart without losing selected puzzle
- Stopwatch timer that starts with the first move
- Solution reveal button (for exploration, not scoring)

### 🌙 UX Enhancements
- Dark/light theme toggle
- Responsive UI for mobile and desktop
- Sound effects for marking/crossing/winning
- Leaderboard with last 5 best solves (sorted by time)

---

## 📦 Project Structure

```
nonograms/
├── src/
│ ├── audio/
│ ├── css/
│ ├── images/
│ ├── javascript/
│ │ ├── dom/
│ │ ├── gameState/
│ │ ├── gameStateShow/ 
│ │ ├── helpers/
│ │ ├── localStorage/
│ │ └── soundEffects/
│ └── main.js
├── index.html
```

---

## 🧑‍💻 Installation

```bash
  Clone the repository
git clone https://github.com/your-username/nonograms-game.git
cd nonograms-game
```

### 🧪 Technologies Used
 - Vanilla JavaScript (No frameworks)
 - HTML5 (Semantic structure)
 - CSS3 (Responsive + Themes)
 - LocalStorage API (Save/Load)

### ✅ Game Rules 
 - Numbers indicate how many black cells are grouped together
 - Multiple numbers mean separate blocks, in given order
 - Fill black cells by logic — no guessing!
 - Optional: Use X marks to cross out empty cells
 - Solve the grid to reveal the hidden image 🎉
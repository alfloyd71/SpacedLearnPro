# Spaced Learn Pro

A modern, responsive flashcard application built with Django. Study smarter with an intuitive interface that helps you track your learning progress using a spaced repetition system.

<p align="center">
  <a href="#features">Features</a> •
  <a href="#demo">Demo</a> •
  <a href="#installation">Installation</a> •
  <a href="#usage">Usage</a> •
  <a href="#project-structure">Project Structure</a> •
  <a href="#license">License</a>
</p>

## Overview

Spaced Learn Pro is a web-based flashcard application designed to help users learn and retain information more effectively through spaced repetition. The app organizes flashcards into five progressive boxes, allowing users to focus on material they find challenging while efficiently reviewing content they've already mastered. With support for both light and dark themes, a clean responsive interface, and seamless progress tracking, Spaced Learn Pro makes studying accessible and efficient on any device.

## Screenshots
<p align="center">
  <!--<img width="300" src="https://www.freesmartphoneapps.com/static/mainpage/images/space-learned-pro/box.jpg" alt="Box">-->
  <img width="300" src="https://www.freesmartphoneapps.com/static/mainpage/images/space-learned-pro/all-cards.jpg" alt="All Cards">&nbsp;&nbsp;<img width="300" src="https://www.freesmartphoneapps.com/static/mainpage/images/space-learned-pro/edit-flashcards.jpg" alt="Edit FlashCards">
</p>

---

## Features

- **Spaced Repetition System**: Cards are organized into 5 boxes based on your knowledge level. Cards you know move forward; cards you need practice on move back.
- **Dark/Light Mode**: Toggle between themes with automatic preference persistence
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Progress Tracking**: Visual indicators show how many cards are in each box

## Demo

Explore the features of the Spaced Learn Pro App by checking out our live demo:

**[View Live Demo](https://www.freesmartphoneapps.com/flashcards/)**

### Light Mode
The clean, minimal interface makes studying easy on the eyes during the day.

### Dark Mode
Reduce eye strain during evening study sessions with the dark theme.

## How It Works

1. **Create Flashcards**: Add question and answer pairs to your deck
2. **Study**: Cards start in Box 1. As you study, mark each card as "I Know It" or "Need Practice"
3. **Progress**: 
   - "I Know It" moves the card to the next box (up to Box 5)
   - "Need Practice" sends the card back to Box 1
4. **Master**: Cards in Box 5 are considered mastered

## Tech Stack

- **Backend**: Django 4.x
- **Frontend**: Vanilla JavaScript, CSS3 with Custom Properties
- **Styling**: Modern CSS with CSS Variables for theming
- **Icons**: Inline SVG icons

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/alfloyd71/SpacedLearnPro.git
   cd flashcardsjs
   ```

2. Create a virtual environment and activate it:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install django
   ```

4. Run migrations:
   ```bash
   python manage.py migrate
   ```

5. Start the development server:
   ```bash
   python manage.py runserver
   ```

6. Open your browser to `http://localhost:8000/flashcardsjs/`

## Usage

Once the application is running, you can start using Spaced Learn Pro:

1. **Home Page**: Navigate to the main page to see your flashcard boxes and progress overview
2. **Add Cards**: Click "Edit Flashcards" to create new question and answer pairs
3. **Study Session**: Select a box to begin studying the cards within it
4. **Review Cards**: 
   - Click on a card to reveal the answer
   - Select "I Know It" to advance the card to the next box
   - Select "Need Practice" to move the card back to Box 1
5. **Toggle Theme**: Use the theme toggle button to switch between light and dark modes
6. **Track Progress**: Monitor your learning progress through the visual box indicators on the home page

## Project Structure

```
flashcardsjs/
├── migrations/           # Database migrations
├── static/flashcardsjs/
│   ├── css/
│   │   └── styles.css   # Main stylesheet with theme support
│   ├── js/
│   │   ├── fetch-data.js
│   │   ├── get-pk.js
│   │   ├── pluralize.js
│   │   ├── questions.js
│   │   └── tally-boxes.js
│   │   
│   └── images/icons/    # App icons
├── templates/flashcardsjs/
│   ├── base-javascript.html
│   ├── card.html
│   ├── editflashcards.html
│   └── index.html
├── admin.py
├── apps.py
├── forms.py
├── models.py
├── urls.py
└── views.py
```

## Customization

### Theming

The app uses CSS custom properties for theming. Modify the variables in `styles.css` to customize colors:

```css
[data-theme="dark"] {
  --bg-primary: #0f172a;
  --bg-secondary: #1e293b;
  /* ... dark theme overrides */
}
```

## License

This project is open source and available under the [MIT License](https://github.com/alfloyd71/SpacedLearnPro?tab=MIT-1-ov-file#readme).
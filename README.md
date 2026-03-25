# Spaced Learn Pro

A modern, responsive flashcard application built with Django. Study smarter with an intuitive interface that helps you track your learning progress using a spaced repetition system.

## Features

- **Spaced Repetition System**: Cards are organized into 5 boxes based on your knowledge level. Cards you know move forward; cards you need practice on move back.
- **Dark/Light Mode**: Toggle between themes with automatic preference persistence
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Progress Tracking**: Visual indicators show how many cards are in each box

## Screenshots

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

MIT License - feel free to use this project for personal or commercial purposes.

![box.jpg](https://www.freesmartphoneapps.com/static/mainpage/images/space-learned-pro/box.jpg)
![all-cards.jpg](https://www.freesmartphoneapps.com/static/mainpage/images/space-learned-pro/all-cards.jpg)
![edit-flashcards.jpg](https://www.freesmartphoneapps.com/static/mainpage/images/space-learned-pro/edit-flashcards.jpg)
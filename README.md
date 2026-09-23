# codespectra-intern-netflix-clone

A Netflix-inspired streaming landing page built as a modern static front-end project using HTML, CSS, and JavaScript. The project recreates the feel of a premium OTT homepage with a full-width hero banner, movie carousels, responsive layout, and navigation.

## Overview

This repository contains a single-page Netflix-style website that showcases:

- Hero banner carousel with autoplay and navigation buttons
- Movie/series category sections
- Responsive grid-based layout
- Mobile sidebar navigation menu
- Footer with branding and browse links
- Interactive carousel behaviors using jQuery + OwlCarousel

## Tech Stack

- HTML5
- CSS3
- JavaScript (jQuery)
- OwlCarousel 2
- Boxicons
- Google Fonts

## Project Structure

```text
.
├── app.css              # Main stylesheet for layout and design
├── app.js               # JavaScript for carousel initialization and menu behavior
├── grid.css             # Responsive CSS grid system
├── index.html           # Main landing page markup
├── README.md            # Project documentation
├── *.jpg                # Movie and banner images
├── *.png                # Banner and UI asset files
├── *.webp               # WebP media assets
├── *.jpeg               # Additional image assets
├── signup.html          # Empty placeholder signup page
├── style.css            # Additional stylesheet (present in repo)
├── Untitled-1.js        # Extra JS file in repo
├── app1.css             # Empty stylesheet placeholder
└── ...
```

## Features

### Home page UI
- Dark Netflix-inspired theme
- Fixed top navigation bar
- Large cinematic hero slider
- Category sections like Top Movies, Trending Now, and Popular Series
- Responsive movie cards with hover effects

### Responsive design
- Uses custom CSS grid classes for desktop, tablet, and mobile layouts
- Mobile hamburger menu for small screens
- Adaptive layout using media queries

### Interactive elements
- Carousel navigation on hero and category sections
- Auto-scrolling slides with pause on hover
- Sidebar menu toggle for mobile screens

## Local Development

Since this is a static site, you can run it directly in a browser without a build step.

### Option 1: Open directly
1. Clone the repository.
2. Open `index.html` in your browser.

### Option 2: Run a local web server
```bash
cd codespectra-intern-netflix-clone
python3 -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## Deployment

This project is suitable for GitHub Pages because it is a static front-end site.

### GitHub Pages setup
1. Go to repository settings.
2. Open the Pages section.
3. Select the branch to deploy from.
4. Choose the root directory (`/`).
5. Save the settings.

Your site will be published at a URL like:

```text
https://<your-username>.github.io/codespectra-intern-netflix-clone/
```

## Notes

- The project is intentionally front-end focused and does not include a backend or database.
- Some files in the repository appear as asset placeholders or duplicate/unused files, but the main project is driven by `index.html`, `app.css`, `app.js`, and `grid.css`.
- This is a static clone/demo UI inspired by Netflix branding and presentation.

## License

This project does not currently include a repository license file. If you plan to share or reuse it publicly, consider adding an open-source license such as MIT.

## Author

MohamedUkkas

## Repository

https://github.com/MohamedUkkas/codespectra-intern-netflix-clone

---

This README reflects the actual repository structure and contents as present in the project files.

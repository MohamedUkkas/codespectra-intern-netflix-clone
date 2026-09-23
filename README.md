# Netflix Clone

A Netflix-inspired static streaming landing page built with HTML, CSS, and JavaScript. It recreates an OTT-style browsing experience with a cinematic hero carousel, movie collections, responsive cards, mobile navigation, and a footer with browse/account links.

## Features

- Autoplay hero carousel for featured titles
- Top Movies, Trending Now, and Popular Series sections
- Responsive movie-card grid and carousel layouts
- Mobile hamburger navigation
- Hover animations and responsive breakpoints
- Static signup page placeholder

## Tech stack

- HTML5
- CSS3, including the custom responsive grid in `grid.css`
- JavaScript with jQuery
- OwlCarousel 2 for sliders
- Boxicons and Google Fonts loaded from CDNs

## Project structure

```text
.
├── index.html       # Main landing page
├── signup.html      # Signup placeholder
├── app.js           # Menu and OwlCarousel initialization
├── app.css          # Main theme and component styles
├── grid.css         # Responsive grid utilities
├── style.css        # Additional stylesheet
├── Untitled-1.js    # Additional JavaScript file
└── *.{jpg,png,webp,jpeg} # Movie and banner artwork
```

## Run locally

This project has no build step or backend. Open `index.html` directly, or serve it locally:

```bash
git clone https://github.com/MohamedUkkas/codespectra-intern-netflix-clone.git
cd codespectra-intern-netflix-clone
python3 -m http.server 8000
```

Open <http://localhost:8000> in a browser.

## Deployment

Because this is a static site, it can be deployed from the repository root using GitHub Pages or any static hosting provider.

## Disclaimer

This is an educational front-end project inspired by Netflix's interface. It is not affiliated with or endorsed by Netflix. The repository does not currently include a license file.

## Author

Mohamed Ukkas

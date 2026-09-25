# Professional Portfolio

A modern personal portfolio website for Roja Mogili, showcasing work experience, skills, projects, and contact information. The site is built as a responsive static web application with interactive experience cards and animated reveals.

## Overview

This portfolio highlights:

- Senior full-stack developer experience
- Healthcare, enterprise, and AI-driven product work
- Core technologies and frameworks
- Project experience and case studies
- Resume page and downloadable PDF access
- Contact form interaction and responsive layout

## Project Structure

```text
professional-portfolio/
├── index.html             # Main portfolio homepage
├── resume.html            # Resume version of the portfolio
├── styles.css             # Main styling and responsive layout
├── script.js              # Interactions for nav, reveal effects, and accordions
├── files/
│   └── Roja Mogili Resume.pdf
├── src/                   # Reserved for additional source assets if needed
└── README.md              # Project documentation
```

## Features

- Responsive single-page portfolio layout
- Animated section reveals on scroll
- Expandable company experience cards
- Expandable project accordion sections
- Portfolio + resume views
- Contact form UI interaction
- Clean, professional design tailored to a software developer profile

## Tech Stack

- HTML5
- CSS3
- JavaScript
- Static site hosting via Python HTTP server

## Local Setup

1. Open a terminal in the project directory.
2. Start a local server:

```bash
python3 -m http.server 8000
```

3. Open the browser at:

```text
http://localhost:8000
```

## Files Description

### index.html
Main portfolio page containing:

- hero section
- summary and about section
- experience timeline
- project highlights
- contact section
- navigation structure

### resume.html
A resume-focused version of the portfolio, optimized for print and quick profile review.

### styles.css
All visual design, layout, responsiveness, typography, spacing, cards, and theme styling.

### script.js
Handles:

- mobile nav toggle
- scroll reveal animations
- company accordion behavior
- project detail toggles
- contact form button feedback

## Customization

To update personal details:

- Edit the content in `index.html`
- Update the resume content in `resume.html`
- Modify styling in `styles.css`
- Replace the PDF in the `files/` folder if needed

## Notes

- This project is static and does not require a build process.
- It works best by serving the folder through a local web server.
- The PDF file is stored under `files/` and can be linked directly from the website.

## Author

Roja Mogili

## License

This project is for personal portfolio use and may be adapted or extended freely for personal or educational purposes.

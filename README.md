# 🍽️ Zomato Clone — Vanilla HTML, CSS & JavaScript

A clean, responsive frontend clone of the **Zomato** web experience built using pure web fundamentals: **HTML5, modern CSS3, and Vanilla JavaScript**. It features restaurant listings, dynamic category filtering, a sliding modal menu, and an interactive client-side cart.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![License: MIT](https://img.shields.io/badge/License-MIT-red.svg)

---

## 🌟 Live Demo

- **Live Preview:** [https://your-username.github.io/zomato-clone](https://your-username.github.io/zomato-clone)
- **Hosted on:** GitHub Pages / Netlify / Vercel

> *Add a screenshot or walkthrough preview here (`assets/images/preview.png`).*

---

## ✨ Key Features

- **🧭 Navigation & Category Switcher:** Switch between Delivery, Dining Out, and Nightlife tabs with active state styling.
- **🔍 Dynamic Search & Filters:** Filter restaurants in real time by name, rating (4.0+), or cuisine tag using pure JS array methods (`filter`, `includes`).
- **📋 Interactive Menu & Details:** Click on any restaurant card to view food dishes, veg/non-veg tags, ratings, and prices.
- **🛒 Functional Cart with `localStorage`:** 
  - Add or remove food items directly.
  - Increment/decrement quantity with live subtotal and tax calculation.
  - Cart persists even after refreshing the page via browser storage.
- **📱 Responsive Layout:** Built using modern CSS Flexbox, CSS Grid, and media queries for smooth rendering on mobile, tablet, and desktop screens.

---

## 🛠️ Built With

- **HTML5:** Semantic markup structure (`header`, `main`, `section`, `article`, `footer`).
- **CSS3:** Custom properties (CSS variables), Flexbox, CSS Grid, custom scrollbars, and hover animations.
- **JavaScript (ES6+):** DOM manipulation, event delegation, template literals, and `localStorage` integration.
- **Icons:** [Font Awesome](https://fontawesome.com/) or [Remix Icon](https://remixicon.com/) (CDN-based).

---

## 📂 Project Structure

```text
zomato-clone/
│
├── index.html          # Main landing page (Restaurant feeds & search)
├── restaurant.html     # Dedicated menu page (optional)
├── style.css           # Global stylesheets, layout & components
├── app.js              # Core logic: filtering, event listeners, cart management
├── data.js             # Local JSON-like JS array containing restaurant mock data
│
└── assets/
    ├── icons/          # SVG icons & brand assets
    └── images/         # Restaurant thumbnails & dish photos
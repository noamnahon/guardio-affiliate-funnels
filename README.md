# Guardio Affiliate Funnel Landing Pages

A collection of high-converting affiliate landing pages designed for Guardio's partner program. Created as a home assignment for the Affiliate Manager Lead position.

## Overview

This project contains four distinct funnel types, each optimized for different traffic sources and user intents. All pages are built with modern HTML5, CSS3, and vanilla JavaScript for maximum performance and compatibility.

## Funnel Types

### 1. Top 10 Comparison (`/pages/top-10-comparison`)

A listicle-style comparison page ranking the best online security solutions. This format works well for:
- SEO traffic targeting "best antivirus" or "top security software" keywords
- Users in the research/comparison phase of their buying journey
- Building trust through comprehensive, expert-style content

**Key Features:**
- Detailed product rankings with scores
- Feature comparison table
- Pros/cons sections
- Trust indicators (research hours, products tested)

### 2. Quiz Funnel (`/pages/quiz-funnel`)

An interactive assessment that evaluates users' online security habits and provides personalized recommendations. Ideal for:
- Social media traffic (Facebook, Instagram)
- Email marketing campaigns
- Engaging users who may not know they need protection

**Key Features:**
- 8-question security assessment
- Progress tracking
- Personalized results based on score
- Vulnerability identification
- Tailored product recommendations

### 3. VS Comparison (`/pages/vs-comparison`)

A head-to-head comparison showcasing Guardio against a competitor. Perfect for:
- Users searching for "[Competitor] alternatives"
- Bottom-of-funnel traffic ready to make a decision
- Highlighting Guardio's unique advantages

**Key Features:**
- Side-by-side feature comparison
- Visual rating bars
- Clear winner indicators
- "Who should choose" sections

### 4. Pre-lander (`/pages/pre-lander`)

An editorial-style warm-up page that educates visitors about online threats before presenting the solution. Great for:
- Native advertising traffic
- Cold audiences unfamiliar with the product
- Building problem awareness before offering a solution

**Key Features:**
- News article format
- Statistics and expert quotes
- Warning signs checklist
- Embedded product highlight
- Social proof elements

## Project Structure

```
/guardio-affiliate-funnels
├── /assets
│   ├── /images          # Product screenshots, hero images
│   ├── /icons           # UI icons, feature icons
│   └── /logos           # Guardio logo, competitor logos
├── /css
│   └── styles.css       # Shared styles, variables, utilities
├── /pages
│   ├── /top-10-comparison
│   ├── /quiz-funnel
│   ├── /vs-comparison
│   └── /pre-lander
├── /js
│   └── main.js          # Shared JavaScript utilities
├── index.html           # Hub page
├── README.md
└── .gitignore
```

## Tech Stack

- **HTML5** - Semantic markup for accessibility and SEO
- **CSS3** - Custom properties, Flexbox, Grid, mobile-first responsive design
- **Vanilla JavaScript** - No frameworks for maximum performance

## Design System

### Colors

The design uses a trust-focused color palette:

- **Primary**: `#1a73e8` (Blue) - Trust, professionalism
- **Accent**: `#00bcd4` (Teal) - Action, innovation
- **Success**: `#10b981` (Green) - Positive actions, checkmarks
- **Warning**: `#f59e0b` (Amber) - Alerts, attention
- **Error**: `#ef4444` (Red) - Urgency, warnings

### Typography

System font stack for optimal performance:
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
```

### Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1023px
- Desktop: 1024px - 1279px
- Large Desktop: ≥ 1280px

## Getting Started

1. Clone the repository
2. Open `index.html` in a browser to view the hub page
3. Navigate to individual funnels from the hub

No build process required - all files are static HTML/CSS/JS.

## Customization

### Adding Tracking

The `main.js` file includes placeholder functions for analytics integration:

```javascript
// Enable Google Analytics
if (typeof gtag !== 'undefined') {
  gtag('event', eventName, eventData);
}

// Enable Facebook Pixel
if (typeof fbq !== 'undefined') {
  fbq('track', eventName, eventData);
}
```

### Updating Affiliate Links

Replace placeholder `href="#"` attributes with actual affiliate tracking URLs:

```html
<a href="https://guardio.com/?ref=YOUR_AFFILIATE_ID" class="btn btn-primary">
  Try Guardio Free
</a>
```

### Adding Images

Place images in the appropriate `/assets` subdirectory and update the placeholder elements:

```html
<!-- Replace this -->
<div class="image-placeholder">Placeholder</div>

<!-- With this -->
<img src="../../assets/images/hero.jpg" alt="Description">
```

## Performance Considerations

- No external dependencies or frameworks
- CSS custom properties for efficient theming
- Minimal JavaScript footprint
- System fonts (no font loading)
- Semantic HTML for fast parsing

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome for Android)

## Author

**Noam Nahon**

Created as a home assignment for the Affiliate Manager Lead position at Guardio.

## License

This project is created for demonstration purposes as part of a job application.


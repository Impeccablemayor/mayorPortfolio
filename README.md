# Mayowa Binuyo — Portfolio (React + Vite)

A modern, dark-themed developer portfolio built with React, Vite, and Tailwind CSS.

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx       # Fixed navigation with mobile menu
│   ├── Hero.jsx         # Landing section with intro + social links
│   ├── About.jsx        # About me + stats
│   ├── Services.jsx     # What I offer
│   ├── Projects.jsx     # Project showcase with live/GitHub links
│   ├── TechStack.jsx    # Filterable tech stack grid
│   ├── Contact.jsx      # Contact form + social links
│   └── Footer.jsx       # Simple footer
├── hooks/
│   └── useReveal.js     # Scroll-triggered animation hook
├── App.jsx              # Root component
├── main.jsx             # Entry point
└── index.css            # Global styles + Tailwind
```

## 🖼️ Adding Your Photo

1. Add your photo to `src/assets/mayor.png` (or any format)
2. In `Hero.jsx`, replace the placeholder div with:

```jsx
import mayorPhoto from '../assets/mayor.png'

// Replace the placeholder div with:
<img
  src={mayorPhoto}
  alt="Mayowa Binuyo"
  className="w-64 h-64 sm:w-80 sm:h-80 rounded-full object-cover border-4 border-navy"
/>
```

## 📄 Adding Your CV

Place your CV PDF in `public/files/Mayowa-Binuyo-Backend-Dev-Resume.pdf`

The About section download button will automatically link to it.

## 🌐 Deploying to Netlify

```bash
# Build first
npm run build

# Then drag the 'dist' folder to netlify.com/drop
# Or connect your GitHub repo to Netlify for auto-deploy
```

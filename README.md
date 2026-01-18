# Ming-Hsuan's Portfolio

A interactive portfolio website built with React, TypeScript, and Tailwind CSS. Featuring a real-time guestbook powered by Firebase and smooth scrolling navigation.

[Live Demo](https://daylilystudio.github.io)

## 🚀 Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Database**: [Firebase Realtime Database](https://firebase.google.com/products/realtime-database)
- **Interactive UI**:
  - [fullPage.js](https://alvarotrigo.com/fullPage/) for section-based scrolling.
  - [Swiper](https://swiperjs.com/) for touch-friendly carousels.

## ✨ Key Features

- **Responsive Design**: Optimized for mobile, tablet, and desktop views.
- **Real-time Guestbook**: Interactive message system allowing visitors to leave comments.
- **Dynamic Content**: Data-driven components for easy updates (Experience, Skills, Works).
- **Interactive Transitions**: Smooth scrolling and hover effects using Tailwind CSS and Swiper.

## 🛠️ Getting Started

### Prerequisites

- Node.js (v20+ recommended)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/daylilystudio/p.git
   cd p
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure Environment Variables:
   Create a `.env` file in the root directory and add your Firebase credentials (refer to `.env.example`):
   ```env
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_DATABASE_URL=your_database_url
   VITE_FIREBASE_PROJECT_ID=your_project_id
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## 📦 Deployment

The project is configured for deployment to GitHub Pages.

To deploy manually:
```bash
npm run deploy
```
This command runs `predeploy` (build) and then uses `gh-pages` to push the `dist` folder to the `gh-pages` branch.

## 📁 Project Structure

```text
src/
├── components/   # React section components
├── data/         # Project data (works, skills, experience)
├── firebase.ts   # Firebase initialization
├── main.tsx      # Entry point
└── App.tsx       # Main component with FullPage structure
public/           # Static assets (images, icons)
```

## 📄 License

Copyright © 2026 [Ming Hsuan](https://github.com/daylilystudio)

# 🎨 Exhibition Curator — Frontend

The frontend is a React + Vite single-page application styled with TailwindCSS.
It allows users to explore artworks, curate virtual exhibitions, and manage collections dynamically.

🌐 Live site: https://exhibition-curator-1.onrender.com

# 🧩 Features

Responsive gallery grid layout

Dynamic artwork cards with consistent image ratios

Add and remove artworks from curated exhibitions

Accessible components with proper ARIA labeling

Fetches artwork data from backend API endpoints

Smooth transitions and a minimalist, modern UI

# 🚀 Development

1. Install dependencies
   npm install

2. Run the development server
   npm run dev

Then open http://localhost:5173
in your browser.

# ⚙️ Environment Variables

The frontend uses a Vite environment variable to connect to the backend:
VITE_API_BASE_URL=http://localhost:9090

For production builds (e.g. on Render), this should point to your hosted backend:
VITE_API_BASE_URL=https://exhibition-curator-dq5i.onrender.com

Add this variable in your Render dashboard or .env file (not committed).

# 🧰 Tech Stack

Tool Purpose
React 19 UI library
Vite Fast build and development
TailwindCSS Utility-first styling
TypeScript Type safety and scalability

# ♿ Accessibility

All images include descriptive alt text

Buttons and interactive elements include ARIA roles

Logical focus order supports keyboard navigation

High-contrast color scheme for readability

# 🌐 Deployment

Platform: Render (Static Site)
Root directory: frontend
Build command:
npm run build

Publish directory:
dist

Environment variables:
VITE_API_BASE_URL=https://exhibition-curator-dq5i.onrender.com

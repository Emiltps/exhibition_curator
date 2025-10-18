# 🧠 Exhibition Curator — Backend

The backend is a Node.js + Express + TypeScript API that aggregates data from public art sources (e.g. Harvard Art Museums, The Met Museum) and exposes endpoints for the React frontend.

🌐 Live API: https://exhibition-curator-dq5i.onrender.com

# 🚀 Setup

1. Install dependencies
   npm install

2. Run the development server
   npm run dev

The server will start at http://localhost:9090

# ⚙️ Environment Variables

Create a .env file in /backend with the following variables:

HARVARD_API_KEY=your_key_here
PORT=9090

# 🔑 Currently, only the Harvard Art Museums API requires an API key.

# 🧩 API Endpoints

Method Route Description Response
GET / Health check Plain text
GET /api/artworks Fetch artworks from external APIs JSON

# 🌐 Deployment (Render)

Service type: Web Service
Root directory: backend

Build command:
npm install && npm run build

Start command:
npm start

Environment variables: same as in .env

# 🧰 Tech Stack

Node.js + Express Server and routing
TypeScript Strong typing and maintainability
Dotenv Environment variable management
ESM modules Modern module system (module: "nodenext")

Each route is modularised under src/routes/

Supports future caching or pagination as data scales

# 🔒 Security & Best Practices

Never commit .env files

Validate all external API responses before serving

Consider adding rate limiting and input sanitisation

Use HTTPS and environment-specific configurations for production

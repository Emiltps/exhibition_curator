# 🧠 Exhibition Curator — Backend

The backend is a Node.js + Express + TypeScript API that aggregates data from public art APIs
and exposes endpoints for the React frontend.

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

# 🧰 Tech Stack

Tool Purpose
Node.js + Express Server and routing
TypeScript Strong typing and maintainability
Dotenv Environment variable management
ESM modules Modern module system (module: "nodenext")

Each route is modularized under src/routes/

Supports future caching or pagination as data scales

# 🔒 Security & Best Practices

Never commit .env files

Validate all external API responses before serving

Consider adding rate limiting and input sanitisation

Use HTTPS and environment-specific configurations for production

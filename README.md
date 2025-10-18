# 🖼️ Exhibition Curator

A full-stack web app for discovering, curating, and managing art exhibitions.
Built with a React (Vite + Tailwind) frontend and a TypeScript + Express backend.

🖥️ Live App: https://exhibition-curator-1.onrender.com

🛠️ Backend API: https://exhibition-curator-dq5i.onrender.com

# 📁 Project Structure

/frontend → React + Vite + Tailwind  
/backend → Express + TypeScript

# 🚀 Quick Start

1. Clone the repository
   git clone https://github.com/Emiltps/exhibition_curator
   cd exhibition_curator

2. Install dependencies
   npm install --prefix frontend
   npm install --prefix backend

3. Run both servers

# Concurrently (recommended):

npm run dev

Or individually:

# Frontend

npm run dev --prefix frontend

# Backend

npm run dev --prefix backend

Frontend → http://localhost:5173

Backend → http://localhost:9090

# ⚙️ Environment Variables

# Backend (/backend/.env)

HARVARD_API_KEY=your_harvard_api_key
PORT=9090

# Frontend (/frontend/.env)

VITE_API_BASE_URL=https://exhibition-curator-dq5i.onrender.com

When running locally, you can omit this or point it to your local backend:
VITE_API_BASE_URL=http://localhost:9090

# 🌐 Deployment (Render)

# Backend

Service type: Web Service
Root directory: backend
Build command: npm install && npm run build
Start command: npm start
Environment variables: same as /backend/.env

# Frontend

Service type: Static Site
Root directory: frontend
Build command: npm install && npm run build
Publish directory: dist
Environment variables:
VITE_API_BASE_URL=https://exhibition-curator-dq5i.onrender.com
Add a \_redirects file in frontend/public with:
/\* /index.html 200

# 🧰 Tech Stack

Layer Tools
Frontend React 19, Vite, TailwindCSS, React Router
Backend Express, TypeScript, Node.js
Deployment Vercel / Render (recommended)
APIs Harvard Art Museums API, The Met Museum API
📜 License

This project is licensed under the MIT License.

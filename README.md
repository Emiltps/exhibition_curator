# 🖼️ Exhibition Curator

A full-stack web app for curating and managing art exhibitions.
Built with a React (Vite + Tailwind) frontend and a TypeScript + Express backend.

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

The backend requires API keys (currently only for Harvard).
Create a .env file in /backend:

HARVARD_API_KEY=your_key_here
PORT=9090

# 🧰 Tech Stack

Layer Tools
Frontend React 19, Vite, TailwindCSS, React Router
Backend Express, TypeScript, Node.js
Deployment Vercel / Render (recommended)
APIs Harvard Art Museums API, The Met Museum API
📜 License

This project is licensed under the MIT License.

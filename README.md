📖 TaleTell – AI Story Generator

TaleTell is an AI-powered story generator where users can create unique stories with the help of large language models. The app provides a smooth storytelling interface with chapters, completions, and interactive editing.

🚀 Features

✨ AI Story Generation – Generate creative stories using OpenAI-powered completions.

📚 Chapters & Progression – Build stories chapter by chapter.

🎨 Frontend in React + Tailwind – Clean and minimal UI for writing.

⚡ Backend with FastAPI – Handles story generation, completions, and persistence.

🔒 Secure Environment Variables – API keys are managed via .env (excluded from Git).

🛠 Tech Stack

Frontend

React (Vite)

TailwindCSS

Axios

Backend

FastAPI

Uvicorn

Pydantic

OpenAI API

Others

Git & GitHub for version control

.env for environment configs

📂 Project Structure
TaleTell/
│── backend/          # FastAPI backend
│   ├── main.py       # Entry point
│   ├── routers/      # API routes
│   ├── models/       # Pydantic models
│   └── ...
│
│── frontend/         # React + Vite frontend
│   ├── src/          # Components & pages
│   └── ...
│
│── .gitignore
│── README.md

⚙️ Setup Instructions
1. Clone the repo
git clone https://github.com/YOUR_USERNAME/TaleTell.git
cd TaleTell

2. Backend Setup (FastAPI)
cd backend
python -m venv venv
source venv/bin/activate   # On Windows: venv\Scripts\activate
pip install -r requirements.txt


Create a .env file in backend/ with:

OPENAI_API_KEY=your_api_key_here


Run the backend:

uvicorn main:app --reload

3. Frontend Setup (React + Vite)
cd frontend
npm install
npm run dev


Frontend runs at: http://localhost:5173/
Backend runs at: http://localhost:8000/

📌 API Example

Complete Story Chapter:

POST /stories/{story_id}/complete


Request body:

{
  "prompt": "The knight entered the haunted forest..."
}

🗺 Roadmap

 Add authentication & user accounts

 Save & continue stories

 Export stories (PDF/EPUB)

 Enhance story generation with more models

📜 License

MIT License © 2025

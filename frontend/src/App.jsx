import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { useParams,useNavigate } from 'react-router-dom'
import Loader from "./components/Loader.jsx"
import StoryGen from "./components/StoryGen.jsx"

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">

        <header className="bg-white shadow-sm">
          <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-gray-900 hover:text-gray-700 transition">
              Interactive Story Generator
            </Link>
          </div>
        </header>

        {/* Main */}
        <main className="flex-1 max-w-3xl w-full mx-auto px-4 py-8">
          <Routes>
            <Route path="/story/:id" element={<Loader />} />
            <Route path="/" element={<StoryGen />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-white border-t py-4">
          <div className="max-w-4xl mx-auto px-4 text-center text-sm text-gray-500">
            Crafted with ✨ using React & Tailwind
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App

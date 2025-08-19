import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Status from "./Status.jsx";
import Game from "./Game.jsx";

const API_BASE_URL = "http://localhost:8000";
function Loader() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [story, setStory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadStory(id);
  }, [id]);

  const loadStory = async (storyId) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `${API_BASE_URL}/stories/${storyId}/complete`
      );
      setStory(response.data);
      setLoading(false);
    } catch (err) {
      if (err.response?.status === 404) {
        setError("Story is not found.");
      } else {
        setError("Failed to load story");
      }
    } finally {
      setLoading(false);
    }
  };

  const createNewStory = () => {
    navigate("/");
  };

  if (loading) {
    return <Status theme={"story"} />;
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 px-6">
        <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Story Not Found
          </h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={createNewStory}
            className="w-full rounded-xl bg-indigo-600 px-4 py-2 text-white font-medium hover:bg-indigo-700 transition"
          >
            Go to Story Generator
          </button>
        </div>
      </div>
    );
  }

  if (story) {
    return (
      <div className="story-loader">
        <Game story={story} onNewStory={createNewStory} />
      </div>
    );
  }
}

export default Loader;

import { useState } from "react";

function Input({ onSubmit }) {
  const [theme, setTheme] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!theme.trim()) {
      setError("Please enter a theme name");
      return;
    }

    setError("");
    onSubmit(theme);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
          Generate Your Adventure
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Enter a theme for your interactive story
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              placeholder="Enter a theme (e.g. pirates, space, medieval...)"
              className={`w-full px-4 py-2 rounded-lg border ${
                error ? "border-red-500" : "border-gray-300"
              } focus:ring-2 focus:ring-blue-500 focus:outline-none`}
            />
            {error && (
              <p className="text-red-500 text-sm mt-1">{error}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition"
          >
            Generate Story
          </button>
        </form>
      </div>
    </div>
  );
}

export default Input;

import { useState, useEffect } from "react";

function Game({ story, onNewStory }) {
  const [currentNodeId, setCurrentNodeId] = useState(null);
  const [currentNode, setCurrentNode] = useState(null);
  const [options, setOptions] = useState([]);
  const [isEnding, setIsEnding] = useState(false);
  const [isWinningEnding, setIsWinningEnding] = useState(false);

  useEffect(() => {
    if (story && story.root_node) {
      const rootNodeId = story.root_node.id;
      setCurrentNodeId(rootNodeId);
    }
  }, [story]);

  useEffect(() => {
    if (currentNodeId && story && story.all_nodes) {
      const node = story.all_nodes[currentNodeId];

      setCurrentNode(node);
      setIsEnding(node.is_ending);
      setIsWinningEnding(node.is_winning_endig);

      if (!node.is_ending && node.options && node.options.length > 0) {
        setOptions(node.options);
      } else {
        setOptions([]);
      }
    }
  }, [currentNodeId, story]);

  const chooseOption = (optionId) => {
    setCurrentNodeId(optionId);
  };

  const restartStory = () => {
    if (story && story.root_node) {
      setCurrentNodeId(story.root_node.id);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-indigo-50 to-white px-6 py-10">
      <div className="w-full max-w-2xl rounded-2xl bg-white shadow-xl p-8">
        {/* Title */}
        <header className="mb-6 text-center">
          <h2 className="text-3xl font-bold text-indigo-700">{story.title}</h2>
        </header>

        {/* Story content */}
        <div className="mb-6">
          {currentNode && (
            <div className="space-y-6">
              <p className="text-gray-800 leading-relaxed">{currentNode.content}</p>

              {isEnding ? (
                <div className="rounded-xl bg-indigo-50 p-6 text-center">
                  <h3 className="text-xl font-semibold text-indigo-700 mb-2">
                    {isWinningEnding ? "🎉 Victory!" : "📖 The End"}
                  </h3>
                  <p className="text-gray-600">
                    {isWinningEnding
                      ? "You’ve discovered a triumphant ending to your journey!"
                      : "Your adventure has reached its conclusion."}
                  </p>
                </div>
              ) : (
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Choose your path:</h3>
                  <div className="grid gap-3">
                    {options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => chooseOption(option.node_id)}
                        className="rounded-xl border border-gray-300 bg-white px-4 py-2 text-gray-800 font-medium hover:bg-indigo-100 hover:border-indigo-400 transition"
                      >
                        {option.text}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="flex justify-between items-center gap-4">
          <button
            onClick={restartStory}
            className="flex-1 rounded-xl bg-gray-100 px-4 py-2 text-gray-700 font-medium hover:bg-gray-200 transition"
          >
            🔄 Restart
          </button>

          {onNewStory && (
            <button
              onClick={onNewStory}
              className="flex-1 rounded-xl bg-indigo-600 px-4 py-2 text-white font-medium hover:bg-indigo-700 transition"
            >
              ✨ New Adventure
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Game;

function Status({ theme }) {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center space-y-6 font-mono">
      <h2 className="text-lg sm:text-xl font-bold text-gray-800 tracking-wide">
        Crafting your {theme} story...
      </h2>

      <div className="flex items-center justify-center">
        <div className="h-6 w-6 border-2 border-gray-800 border-t-transparent rounded-full animate-spin"></div>
      </div>

      <p className="text-sm text-gray-600 max-w-xs leading-relaxed">
        Please wait... your adventure is loading.
      </p>
    </div>
  )
}

export default Status

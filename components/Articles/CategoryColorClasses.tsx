export const getCategoryColorClasses = (category: string): string => {
    switch (category) {
        case 'Industry Shifts':
            return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 ring-blue-600 dark:ring-blue-500';
        case 'AI Agents':
            return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 ring-purple-600 dark:ring-purple-500';
        case 'Startups':
            return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 ring-green-600 dark:ring-green-500';
        case 'Research':
            return 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300 ring-amber-600 dark:ring-amber-500';
        case 'Product':
            return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300 ring-red-600 dark:ring-red-500';
        default:
            return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300 ring-gray-600 dark:ring-gray-500';
    }
};

        {/* <div className="mb-6 flex gap-2 flex-wrap justify-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all
            ${category === activeFilter ? 'ring-2 ring-offset-2 ' : ''}
            ${category === "All"
                ? activeFilter === category
                  ? "bg-white text-gray-900 ring-gray-400 dark:bg-gray-900 dark:text-white dark:ring-gray-900"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                : getCategoryColorClasses(category)
              }`}
          >
            {category}
          </button>
        ))}
      </div> */}
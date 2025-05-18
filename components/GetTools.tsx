'use client'

import { tools, Tool } from "../data/tools-data"
import React from "react"

export default function Tools() {
    const [selectedCategory, setSelectedCategory] = React.useState<string>("All")
    const [isOpen, setIsOpen] = React.useState(false);  // Add this line

    // Group tools by category
    const toolsByCategory = React.useMemo(() => {
        return tools.reduce((acc: Record<string, Tool[]>, tool) => {
            if (!acc[tool.category]) {
                acc[tool.category] = []
            }
            acc[tool.category].push(tool)
            return acc
        }, {})
    }, [])

    // Get all unique categories
    const categories = React.useMemo(() => {
        return ["All", ...Object.keys(toolsByCategory)]
    }, [toolsByCategory])

    // Filter tools based on selected category
    const filteredTools = React.useMemo(() => {
        if (selectedCategory === "All") {
            return toolsByCategory
        }

        return {
            [selectedCategory]: toolsByCategory[selectedCategory] || []
        }
    }, [selectedCategory, toolsByCategory])

    return (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-6xl mx-auto">
            {/* Mobile Dropdown */}
            <div className="md:hidden relative w-full mb-6">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full flex items-center justify-between px-4 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-sm text-gray-900 dark:text-gray-100"
                    aria-expanded={isOpen}
                >
                    <span className="font-semibold">
                        {selectedCategory || "Select a category"}
                    </span>
                    <svg
                        className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>

                {isOpen && (
                    <div className="absolute z-10 w-full mt-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-lg">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => {
                                    setSelectedCategory(category);
                                    setIsOpen(false);
                                }}
                                className={`w-full text-left px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800 
                  ${selectedCategory === category ? "bg-gray-100 dark:bg-gray-800" : ""}`}
                            >
                                <span className="font-semibold text-md text-gray-900 dark:text-gray-100">
                                    {category}
                                </span>
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Desktop Sidebar - Hidden on Mobile */}
            <div className="hidden md:block md:col-span-4">
                <div className="space-y-1 pr-4 sticky top-20 max-h-[calc(100vh-10rem)] overflow-y-auto">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`w-full text-left px-4 py-3 rounded-lg transition-all 
                ${selectedCategory === category
                                    ? "bg-gray-100 dark:bg-gray-800 shadow-sm"
                                    : "hover:bg-gray-50 dark:hover:bg-gray-900/70"
                                }`}
                        >
                            <span className="font-semibold text-md text-gray-900 dark:text-gray-100">
                                {category}
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <div className="md:col-span-8 md:max-h-[calc(100vh-10rem)] md:overflow-y-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {Object.entries(filteredTools).map(([category, tools]) => (
                        <React.Fragment key={category}>
                            {tools.map((tool) => (
                                <a
                                    key={tool.id}
                                    href={tool.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm transition-all hover:shadow-md hover:border-gray-300 dark:hover:border-gray-700"
                                >
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                                            {tool.name}
                                        </h3>
                                        <svg
                                            className="w-5 h-5 text-blue-600 dark:text-sky-400 flex-shrink-0"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                            />
                                        </svg>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                                        {tool.description}
                                    </p>
                                    <span className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full font-medium text-gray-700 dark:text-gray-300">
                                        {tool.category}
                                    </span>
                                </a>
                            ))}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
}


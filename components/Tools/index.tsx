'use client'

import { tools, Tool } from "../../data/tools-data"
import ToolCard from "./ToolCard"
import React from "react"

export default function Tools() {
    const [selectedCategory, setSelectedCategory] = React.useState<string>("All")
    const [isOpen, setIsOpen] = React.useState(false);

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
        <div className="space-y-6">
            {/* Category Info Section */}
            {/* <div className="max-w-6xl mx-auto">
                <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-800">
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30">
                        <svg 
                            className="w-4 h-4 text-blue-600 dark:text-sky-400" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" 
                            />
                        </svg>
                    </div>
                    <div>
                        <h2 className="text-sm font-medium text-gray-600 dark:text-gray-400">Currently viewing</h2>
                        <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">{selectedCategory} Tools</p>
                    </div>
                </div>
            </div> */}

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
                <div className="hidden md:block md:col-span-3">
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
                <div className="md:col-span-9">
                    <div className="grid grid-cols-1 gap-5">
                        {Object.entries(filteredTools).map(([category, tools]) => (
                            <React.Fragment key={category}>
                                {tools.map((tool) => (
                                    <ToolCard key={tool.id} tool={tool} />
                                ))}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}


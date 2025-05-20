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
        <div className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-6xl mx-auto">

                {/* Mobile Dropdown */}
                <div className="lg:hidden relative w-full mb-6">
                    <p className="font-light text-sm mb-2">
                        Categories:
                    </p>
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
                                    <span className="font-semibold text-md text-gray-900 dark:text-gray-100 font-inter">
                                        {category}
                                    </span>
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Desktop Sidebar - Hidden on Mobile */}
                <div className="hidden lg:block lg:col-span-3">
                    <div className="space-y-1 pr-4 sticky top-20 max-h-[calc(100vh-10rem)] overflow-y-auto">
                        <p className="font-light text-sm mb-2">
                            Categories:
                        </p>
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`w-full text-left px-4 py-3 rounded-lg transition-all ${selectedCategory === category
                                        ? "bg-gray-100 dark:bg-gray-800 shadow-sm"
                                        : "hover:bg-gray-50 dark:hover:bg-gray-900/70"
                                    }`}
                            >
                                <h3 className="font-semibold text-sm text-gray-900 dark:text-gray-100 font-inter">
                                    {category}
                                </h3>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Main Content */}
                <div className="lg:col-span-9">
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


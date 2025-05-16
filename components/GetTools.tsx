'use client'

import { tools, Tool, categorySubcategories } from "../data/tools-data"
import React from "react"

export default function Tools() {
    const [selectedCategory, setSelectedCategory] = React.useState<string>("All")
    const [selectedSubcategory, setSelectedSubcategory] = React.useState<string>("All")

    // Group tools by category and subcategory
    const toolsByCategory = React.useMemo(() => {
        return tools.reduce((acc: Record<string, Record<string, Tool[]>>, tool) => {
            if (!acc[tool.category]) {
                acc[tool.category] = {}
            }
            if (!acc[tool.category][tool.subcategory]) {
                acc[tool.category][tool.subcategory] = []
            }
            acc[tool.category][tool.subcategory].push(tool)
            return acc
        }, {})
    }, [])

    // Get all unique categories
    const categories = React.useMemo(() => {
        return ["All", ...Object.keys(toolsByCategory)]
    }, [toolsByCategory])

    // Get subcategories for selected category
    const subcategories = React.useMemo(() => {
        if (selectedCategory === "All") return ["All"]
        return ["All", ...(categorySubcategories[selectedCategory] || [])]
    }, [selectedCategory])

    // Filter tools based on selection
    const filteredTools = React.useMemo(() => {
        if (selectedCategory === "All") {
            return toolsByCategory
        }

        const categoryTools = toolsByCategory[selectedCategory] || {}
        if (selectedSubcategory === "All") {
            return { [selectedCategory]: categoryTools }
        }

        return {
            [selectedCategory]: {
                [selectedSubcategory]: categoryTools[selectedSubcategory] || []
            }
        }
    }, [selectedCategory, selectedSubcategory, toolsByCategory])

    return (
        <div className="space-y-8 pb-8">
            <section className="text-center space-y-6 py-8">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    AI Tool Directory
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                    Discover and compare the most powerful AI tools available today. Filter by category and subcategory to find exactly what you need.
                </p>

                {/* Filter Section */}
                <div className="max-w-[900px] pt-6 mx-auto space-y-6">
                    {/* Main Categories */}
                    <div>
                        <div className="flex flex-wrap justify-center gap-3">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => {
                                        setSelectedCategory(category)
                                        setSelectedSubcategory("All")
                                    }}
                                    className={`px-5 py-2 text-sm rounded-md transition-all transform hover:scale-105 font-medium ${selectedCategory === category
                                            ? "bg-blue-600 text-white shadow-lg dark:bg-blue-500"
                                            : "bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-300 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700 dark:hover:border-blue-500"
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Subcategories with divider */}
                    {selectedCategory !== "All" && (
                        <div className="relative pt-6">
                            <div className="absolute top-0 left-1/2 w-24 h-px bg-gray-200 dark:bg-gray-700 transform -translate-x-1/2" />
                            <div className="flex flex-wrap justify-center gap-2">
                                {subcategories.map((subcategory) => (
                                    <button
                                        key={subcategory}
                                        onClick={() => setSelectedSubcategory(subcategory)}
                                        className={`px-4 py-1.5 rounded-lg transition-all text-sm ${selectedSubcategory === subcategory
                                                ? "bg-green-100 text-green-800 border border-green-300 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800"
                                                : "bg-gray-50 text-gray-600 border hover:bg-gray-100 dark:bg-gray-800/50 dark:text-gray-400 dark:border-gray-700 dark:hover:bg-gray-700/50"
                                            }`}
                                    >
                                        {subcategory}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>

            <div className="grid gap-8">
                {Object.entries(filteredTools).map(([category, subcategoryTools]) => (
                    <section key={category} className="space-y-4 py-8">
                        <h2 className="text-xl font-semibold">{category}</h2>
                        {Object.entries(subcategoryTools).map(([subcategory, tools]) => (
                            <div key={subcategory} className="space-y-4">
                                <h3 className="text-xl font-medium text-gray-600 dark:text-gray-400">{subcategory}</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {tools.map((tool: Tool) => (
                                        <a
                                            key={tool.name}
                                            href={tool.url}
                                            className="group block p-6 border rounded-xl hover:border-blue-500 transition-all duration-300 dark:border-gray-700 bg-white dark:bg-gray-800/50 hover:shadow-lg dark:hover:shadow-blue-500/10 transform hover:-translate-y-1"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <div className="flex justify-between items-start mb-3">
                                                <h3 className="font-semibold text-lg group-hover:text-blue-500 transition-colors">{tool.name}</h3>
                                                <div className="text-gray-400 group-hover:text-blue-500 transition-colors">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{tool.description}</p>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </section>
                ))}
            </div>
        </div>
    )
}

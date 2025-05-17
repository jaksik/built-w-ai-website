import React, { useState } from "react"

const glossaryItems = [
    {
        term: "Artificial Intelligence (AI)",
        definition: "The simulation of human intelligence by machines programmed to think and learn.",
        category: "Core Concepts",
    },
    {
        term: "Machine Learning",
        definition: "A subset of AI that enables systems to learn and improve from experience without explicit programming.",
        category: "Core Concepts",
    },
    {
        term: "ChatGPT",
        definition: "An AI language model developed by OpenAI that can engage in conversational interactions and generate human-like text.",
        category: "AI Tools",
    },
]
export function Glossary() {
    const [selectedTerm, setSelectedTerm] = useState(glossaryItems[0].term)
    const selectedItem = glossaryItems.find(item => item.term === selectedTerm)

    return (
        <div className="container mx-auto px-4 py-8">
            <section className="text-center space-y-4 mb-12">
                <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
                    AI Glossary
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400">
                    Essential terms and concepts in artificial intelligence, explained simply.
                </p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-6xl mx-auto">
                {/* Sidebar */}
                <div className="md:col-span-4 md:border-r border-gray-200 dark:border-gray-800">
                    <div className="space-y-1 pr-4 sticky top-4">
                        {glossaryItems.map((item) => (
                            <button
                                key={item.term}
                                onClick={() => setSelectedTerm(item.term)}
                                className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                                    selectedTerm === item.term
                                        ? "bg-gray-100 dark:bg-gray-800 shadow-sm"
                                        : "hover:bg-gray-50 dark:hover:bg-gray-900"
                                }`}
                            >
                                <h3 className="font-semibold text-md text-gray-900 dark:text-gray-100">
                                    {item.term}
                                </h3>
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                    {item.category}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Main Content */}
                <div className="md:col-span-8">
                    {selectedItem && (
                        <div className="p-8 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm">
                            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                                {selectedItem.term}
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 leading-relaxed">
                                {selectedItem.definition}
                            </p>
                            <div className="flex items-center">
                                <span className="text-sm px-4 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-full font-medium">
                                    {selectedItem.category}
                                </span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
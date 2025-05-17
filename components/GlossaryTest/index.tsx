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
        <div className="space-y-8 pb-8">
            <section className="text-center space-y-6 py-8">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Glossary
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                    Discover and compare the most powerful AI tools available today. Filter by category to find exactly what you need.
                </p>
            </section>

            <div className="grid grid-cols-12 gap-8">
                {/* Sidebar */}
                <div className="col-span-4 border-r border-gray-200 dark:border-gray-800">
                    <div className="space-y-2 pr-4">
                        {glossaryItems.map((item) => (
                            <button
                                key={item.term}
                                onClick={() => setSelectedTerm(item.term)}
                                className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                                    selectedTerm === item.term
                                        ? "bg-gray-100 dark:bg-gray-800"
                                        : "hover:bg-gray-50 dark:hover:bg-gray-900"
                                }`}
                            >
                                <h3 className="font-medium">{item.term}</h3>
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                    {item.category}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Main Content */}
                <div className="col-span-8">
                    {selectedItem && (
                        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
                            <h2 className="text-2xl font-semibold mb-2">{selectedItem.term}</h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                {selectedItem.definition}
                            </p>
                            <span className="text-sm px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded">
                                {selectedItem.category}
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
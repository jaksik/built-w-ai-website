import React from "react"

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

export function Labs() {
    return (
<div>
        {/* // <div className="space-y-8 pb-8">
        //     <section className="text-center space-y-6 py-8">
        //         <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
        //             AI Labs
        //         </h1>
        //         <p className="mx-auto max-w-[700px] text-gray-500 md:text-lg dark:text-gray-400">
        //             Discover and compare the most powerful AI tools available today. Filter by category to find exactly what you need.
        //         </p>


        //     </section> */}

            <div className="grid gap-8">
                <div className="grid gap-6">
                    {glossaryItems.map((item) => (
                        <div
                            key={item.term}
                            className="p-6 rounded-lg border border-gray-200 dark:border-gray-800"
                        >
                            <h2 className="text-2xl font-semibold mb-2">{item.term}</h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">{item.definition}</p>
                            <span className="text-sm px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded">
                                {item.category}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
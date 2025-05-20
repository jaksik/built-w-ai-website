import React, { useState, useMemo } from "react";
import glossaryDataJson from "@/data/glossary-data.json"; // Assuming your JSON is structured as an array of objects

// Define the expected structure of a glossary item from your JSON
interface GlossaryItem {
    id: string;
    name: string;
    definition: string;
    analogy?: string; // Optional field
    significance?: string; // Optional field
    category: string;
    // Add other fields like 'related' if they exist in your JSON
    // related?: string[]; 
}

// Cast the imported JSON to the defined type
const glossaryData: GlossaryItem[] = glossaryDataJson as GlossaryItem[];

/**
 * Parses text content and replaces markdown-style links [Link Text](term-id)
 * with interactive React elements (buttons styled as links).
 * @param {string | undefined} text - The text to parse.
 * @param {string | null} currentTermId - The ID of the currently displayed term (to avoid self-linking or style differently).
 * @param {(id: string) => void} handleTermSelect - Function to call when an interlink is clicked.
 * @param {GlossaryItem[]} allGlossaryData - The full array of glossary items for link validation.
 * @returns {React.ReactNodeArray | null} An array of strings and React elements, or null if input text is empty.
 */
const parseInterlinksReact = (
    text: string | undefined,
    currentTermId: string | null,
    handleTermSelect: (id: string) => void,
    allGlossaryData: GlossaryItem[]
): React.ReactNode[] | null => {
    if (!text) return null;

    const parts: React.ReactNode[] = [];
    let lastIndex = 0;
    // Regex to find markdown links: [Link Text](term-id)
    // term-id is assumed to be alphanumeric with hyphens.
    const regex = /\[([^\]]+)\]\(([a-zA-Z0-9-]+)\)/g;
    let match;

    while ((match = regex.exec(text)) !== null) {
        // Add text segment before the current link
        if (match.index > lastIndex) {
            parts.push(text.substring(lastIndex, match.index));
        }

        const linkText = match[1];
        const termId = match[2];
        const termExists = allGlossaryData.some(term => term.id === termId);

        if (termExists) {
            if (termId === currentTermId) {
                // If the link is to the current term, display it as emphasized text
                parts.push(
                    <strong key={`${termId}-${match.index}`} className="font-semibold text-sky-600 dark:text-sky-400">
                        {linkText}
                    </strong>
                );
            } else {
                // If the link is to another valid term, create a clickable button
                parts.push(
                    <button
                        key={`${termId}-${match.index}`}
                        onClick={() => handleTermSelect(termId)}
                        className="text-blue-600 dark:text-sky-400 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-sky-500 rounded-sm font-medium"
                        aria-label={`Learn more about ${linkText}`}
                    >
                        {linkText}
                    </button>
                );
            }
        } else {
            // If termId doesn't exist in glossaryData, render the link text as plain text
            parts.push(linkText);
        }
        lastIndex = regex.lastIndex;
    }

    // Add any remaining text segment after the last link
    if (lastIndex < text.length) {
        parts.push(text.substring(lastIndex));
    }

    // Wrap each part in a React.Fragment with a key for proper rendering of the array
    return parts.map((part, index) => <React.Fragment key={index}>{part}</React.Fragment>);
};


export function Glossary() {
    const [selectedTermId, setSelectedTermId] = useState<string | null>(glossaryData.length > 0 ? glossaryData[0].id : null);
    const [isOpen, setIsOpen] = useState(false);

    // Memoize selectedItem to avoid re-calculating on every render unless selectedTermId or glossaryData changes
    const selectedItem = useMemo(() => {
        return glossaryData.find(item => item.id === selectedTermId);
    }, [selectedTermId]);

    // Function to handle term selection
    const handleTermSelect = (id: string) => {
        setSelectedTermId(id);
        setIsOpen(false); // Close mobile dropdown after selection
        // Optional: Scroll to the top of the content area
        const contentArea = document.getElementById("glossary-content-area");
        if (contentArea) {
            contentArea.scrollTop = 0;
        }
    };

    if (!glossaryData || glossaryData.length === 0) {
        return (
            <div className="container mx-auto px-4 py-8 text-center">
                <p className="text-red-500">Glossary data is not available or empty.</p>
            </div>
        );
    }

    return (
        // <div className="container mx-auto px-4 py-8">
        //     <section className="text-center space-y-4 mb-12">
        //         <h1 className="text-3xl font-bold tracking-tight lg:text-5xl text-gray-900 dark:text-gray-100">
        //             AI Glossary
        //         </h1>
        //         <p className="mx-auto max-w-[700px] text-gray-500 md:text-lg dark:text-gray-400">
        //             Essential terms and concepts for understanding artificial intelligence.                </p>
        //     </section>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-6xl mx-auto">
                {/* Mobile Dropdown */}
                <div className="md:hidden relative w-full mb-6">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="w-full flex items-center justify-between px-4 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-sm text-gray-900 dark:text-gray-100"
                        aria-expanded={isOpen}
                        aria-controls="mobile-glossary-menu"
                    >
                        <span className="font-semibold">
                            {selectedItem?.name || "Select a term"}
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
                        <div
                            id="mobile-glossary-menu"
                            className="absolute z-10 w-full mt-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-lg max-h-60 overflow-y-auto"
                        >
                            {glossaryData.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => handleTermSelect(item.id)}
                                    className={`w-full text-left px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800 ${selectedTermId === item.id ? "bg-gray-100 dark:bg-gray-800" : ""
                                        }`}
                                >
                                    <h3 className="font-semibold text-md text-gray-900 dark:text-gray-100">
                                        {item.name}
                                    </h3>
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Desktop Sidebar - Hidden on Mobile */}
                <div className="hidden md:block md:col-span-3">
                    <div className="space-y-1 pr-4 sticky top-20 max-h-[calc(100vh-10rem)] overflow-y-auto"> {/* Added sticky, top, max-h and overflow */}
                        {glossaryData.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => handleTermSelect(item.id)}
                                className={`w-full text-left px-4 py-3 rounded-lg transition-all ${selectedTermId === item.id
                                    ? "bg-gray-100 dark:bg-gray-800 shadow-sm"
                                    : "hover:bg-gray-50 dark:hover:bg-gray-900/70"
                                    }`}
                            >
                                <h3 className="font-semibold text-md text-gray-900 dark:text-gray-100">
                                    {item.name}
                                </h3>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Main Content */}
                <div id="glossary-content-area" className="md:col-span-9 max-h-[calc(100vh-10rem)] overflow-y-auto"> {/* Added id for scrolling */}
                    {selectedItem ? (
                        <div className="p-6 sm:p-8 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm">
                            <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                                {selectedItem.name}
                            </h2>

                            <div className="space-y-6 prose prose-sm sm:prose dark:prose-invert max-w-none">
                                <div>
                                    <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200 mb-1">
                                        Definition
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                        {parseInterlinksReact(selectedItem.definition, selectedItem.id, handleTermSelect, glossaryData) || "Not available."}
                                    </p>
                                </div>

                                {selectedItem.analogy && (
                                    <div>
                                        <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200 mb-1">
                                            Analogy
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed italic">
                                            {parseInterlinksReact(selectedItem.analogy, selectedItem.id, handleTermSelect, glossaryData)}
                                        </p>
                                    </div>
                                )}

                                {selectedItem.significance && (
                                    <div>
                                        <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200 mb-1">
                                            Why it Matters
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                            {parseInterlinksReact(selectedItem.significance, selectedItem.id, handleTermSelect, glossaryData)}
                                        </p>
                                    </div>
                                )}

                                <div className="pt-4">
                                    <span className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full font-medium text-gray-700 dark:text-gray-300">
                                        Category: {selectedItem.category}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="p-8 text-center text-gray-500 dark:text-gray-400">
                            <p>Select a term to see its details.</p>
                        </div>
                    )}
                </div>
            </div>
    );
}
// ```

// **Key Changes and How to Use:**

// 1.  **JSON Data (`@/data/glossary-data.json`):**
//     * Make sure your JSON file is an array of objects. Each object should have at least an `id` (unique string), `name` (string), `definition` (string), and `category` (string).
//     * Optional fields like `analogy` and `significance` can also be included.
//     * **For interlinking:** In your `definition`, `analogy`, or `significance` text within the JSON, use the markdown format: `[Text to Display](term-id)`.
//         * Example: `"definition": "A subset of AI that enables systems to learn from data. See also [Deep Learning](deep-learning-id)."`
//         * Replace `deep-learning-id` with the actual `id` of your "Deep Learning" term in the JSON.

// 2.  **`GlossaryItem` Interface:**
//     * I've added an interface `GlossaryItem` to define the expected structure of objects in your `glossaryData.json`. This helps with type safety. Adjust it if your JSON has different fields.

// 3.  **`parseInterlinksReact` Function:**
//     * This new function handles the logic for converting the markdown links into clickable React elements. You don't need to call it directly; the component uses it internally.

// 4.  **Rendering Content:**
//     * The component now uses `parseInterlinksReact` to render the `definition`, `analogy`, and `significance` fields.

// 5.  **Styling:**
//     * Interlinks are styled with Tailwind CSS classes (`text-blue-600 dark:text-sky-400 hover:underline ...`). You can customize these as needed.
//     * I've added some minor improvements like `max-h` and `overflow-y-auto` to the sidebar and content area for better scrolling on desktop if the content is long, and used Tailwind's `prose` classes for better typography in the content section.

// **To make this work:**

// * Ensure your `@/data/glossary-data.json` file is correctly structured and contains the interlinks in the `[Display Text](term-id)` format.
// * The `id` in `[...](term-id)` must exactly match the `id` field of another term in your JSON file for the link to work.

// This setup should provide the dynamic interlinking functionality you were looking f
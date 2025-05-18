import React, { useState, useMemo } from "react";
// Assuming your lab data is in lab-data.json
import labsDataJson from "@/data/lab-data.json"; 
// Assuming your glossary data is in glossary-data.json for interlinking
import glossaryTermsDataJson from "@/data/glossary-data.json"; 

// Define the expected structure of a Lab item from your JSON
interface LabItem {
    id: string;
    name: string;
    category: string;
    idea: string;
    activity: string[]; // Array of strings
    linkToGlossary: string[]; // Array of glossary term IDs
    whatYoullLearn: string;
}

// Define the expected structure of a Glossary Term item for interlinking
interface GlossaryTermItem {
    id: string;
    name: string;
    // Add other fields if your glossary items have more, e.g., definition
    definition?: string; 
    category?: string;
}

// Cast the imported JSON to the defined types
const labData: LabItem[] = labsDataJson as LabItem[];
const glossaryTermsData: GlossaryTermItem[] = glossaryTermsDataJson as GlossaryTermItem[];

/**
 * Parses text content (e.g., lab idea, activity step) and replaces 
 * markdown-style links [Link Text](glossary-term-id)
 * with interactive React elements (buttons styled as links) that point to glossary terms.
 * @param {string | undefined} text - The text to parse.
 * @param {(glossaryId: string) => void} handleGlossaryTermSelect - Function to call when an interlink to a glossary term is clicked.
 * @param {GlossaryTermItem[]} allGlossaryTerms - The full array of glossary term items for link validation.
 * @returns {React.ReactNodeArray | null} An array of strings and React elements, or null if input text is empty.
 */
const parseInterlinksToGlossaryReact = (
    text: string | undefined,
    handleGlossaryTermSelect: (glossaryId: string) => void,
    allGlossaryTerms: GlossaryTermItem[]
): React.ReactNode[] | null => {
    if (!text) return null;

    const parts: React.ReactNode[] = [];
    let lastIndex = 0;
    const regex = /\[([^\]]+)\]\(([a-zA-Z0-9-]+)\)/g; // [Link Text](glossary-term-id)
    let match;

    while ((match = regex.exec(text)) !== null) {
        if (match.index > lastIndex) {
            parts.push(text.substring(lastIndex, match.index));
        }

        const linkText = match[1];
        const termId = match[2]; // This is expected to be a glossary term ID
        const termExists = allGlossaryTerms.some(term => term.id === termId);

        if (termExists) {
            parts.push(
                <button
                    key={`${termId}-${match.index}`}
                    onClick={() => handleGlossaryTermSelect(termId)}
                    className="text-blue-600 dark:text-sky-400 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-sky-500 rounded-sm font-medium"
                    aria-label={`Learn more about ${linkText} in the glossary`}
                >
                    {linkText}
                </button>
            );
        } else {
            parts.push(linkText); // If glossary term ID doesn't exist, render as plain text
        }
        lastIndex = regex.lastIndex;
    }

    if (lastIndex < text.length) {
        parts.push(text.substring(lastIndex));
    }

    return parts.map((part, index) => <React.Fragment key={index}>{part}</React.Fragment>);
};


export function Labs() {
    const [selectedLabId, setSelectedLabId] = useState<string | null>(labData.length > 0 ? labData[0].id : null);
    const [isOpen, setIsOpen] = useState(false); // For mobile dropdown

    const selectedLab = useMemo(() => {
        return labData.find(lab => lab.id === selectedLabId);
    }, [selectedLabId]);

    // Function to handle lab selection from the sidebar/dropdown
    const handleLabSelect = (id: string) => {
        setSelectedLabId(id);
        setIsOpen(false); 
        const contentArea = document.getElementById("lab-content-area");
        if (contentArea) {
            contentArea.scrollTop = 0;
        }
    };

    // Placeholder function for handling clicks on glossary term links
    // In a real app, this might navigate to a glossary page or open a modal
    const handleGlossaryTermLinkClick = (glossaryId: string) => {
        console.log("Navigate to or display glossary term:", glossaryId);
        // Example: window.location.href = `/glossary#${glossaryId}`;
        // Or, if using a modal or a different state management for glossary:
        // openGlossaryModal(glossaryId);
    };


    if (!labData || labData.length === 0) {
        return (
            <div className="container mx-auto px-4 py-8 text-center">
                <p className="text-red-500">AI Lab data is not available or empty.</p>
            </div>
        );
    }

    return (
        <div>
            

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-6xl mx-auto">
                {/* Mobile Dropdown for Labs */}
                <div className="md:hidden relative w-full mb-6">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="w-full flex items-center justify-between px-4 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-sm text-gray-900 dark:text-gray-100"
                        aria-expanded={isOpen}
                        aria-controls="mobile-lab-menu"
                    >
                        <span className="font-semibold">
                            {selectedLab?.name || "Select a Lab"}
                        </span>
                        <svg
                            className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
                            fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            viewBox="0 0 24 24" stroke="currentColor"
                        >
                            <path d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    {isOpen && (
                        <div
                            id="mobile-lab-menu"
                            className="absolute z-10 w-full mt-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-lg max-h-60 overflow-y-auto"
                        >
                            {labData.map((lab) => (
                                <button
                                    key={lab.id}
                                    onClick={() => handleLabSelect(lab.id)}
                                    className={`w-full text-left px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800 ${selectedLabId === lab.id ? "bg-gray-100 dark:bg-gray-800" : ""}`}
                                >
                                    <h3 className="font-semibold text-md text-gray-900 dark:text-gray-100">
                                        {lab.name}
                                    </h3>
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Desktop Sidebar for Labs */}
                <div className="hidden md:block md:col-span-4">
                    <div className="space-y-1 pr-4 sticky top-20 max-h-[calc(100vh-10rem)] overflow-y-auto">
                        {labData.map((lab) => (
                            <button
                                key={lab.id}
                                onClick={() => handleLabSelect(lab.id)}
                                className={`w-full text-left px-4 py-3 rounded-lg transition-all ${selectedLabId === lab.id
                                        ? "bg-gray-100 dark:bg-gray-800 shadow-sm"
                                        : "hover:bg-gray-50 dark:hover:bg-gray-900/70"
                                    }`}
                            >
                                <h3 className="font-semibold text-md text-gray-900 dark:text-gray-100">
                                    {lab.name}
                                </h3>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Main Content for Selected Lab */}
                <div id="lab-content-area" className="md:col-span-8 max-h-[calc(100vh-10rem)] overflow-y-auto">
                    {selectedLab ? (
                        <div className="p-6 sm:p-8 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm">
                            <h2 className="text-2xl lg:text-3xl font-bold mb-1 text-gray-900 dark:text-gray-100">
                                {selectedLab.name}
                            </h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                                Category: {selectedLab.category}
                            </p>

                            <div className="space-y-6 prose prose-sm sm:prose dark:prose-invert max-w-none">
                                <div>
                                    <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200 mb-1">
                                        Lab Idea
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                        {parseInterlinksToGlossaryReact(selectedLab.idea, handleGlossaryTermLinkClick, glossaryTermsData) || "Not available."}
                                    </p>
                                </div>

                                {selectedLab.activity && selectedLab.activity.length > 0 && (
                                    <div>
                                        <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200 mb-1">
                                            Activity / Steps
                                        </h3>
                                        <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-300 leading-relaxed">
                                            {selectedLab.activity.map((step, index) => (
                                                <li key={index}>
                                                    {parseInterlinksToGlossaryReact(step, handleGlossaryTermLinkClick, glossaryTermsData)}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {selectedLab.whatYoullLearn && (
                                    <div>
                                        <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200 mb-1">
                                            What You'll Learn
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                            {parseInterlinksToGlossaryReact(selectedLab.whatYoullLearn, handleGlossaryTermLinkClick, glossaryTermsData)}
                                        </p>
                                    </div>
                                )}
                                
                                {selectedLab.linkToGlossary && selectedLab.linkToGlossary.length > 0 && (
                                    <div className="pt-4">
                                        <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200 mb-2">
                                            Related Glossary Concepts
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedLab.linkToGlossary.map((glossaryId) => {
                                                const term = glossaryTermsData.find(t => t.id === glossaryId);
                                                return term ? (
                                                    <button
                                                        key={glossaryId}
                                                        onClick={() => handleGlossaryTermLinkClick(glossaryId)}
                                                        className="text-xs px-3 py-1.5 bg-sky-100 hover:bg-sky-200 dark:bg-sky-700 dark:hover:bg-sky-600 text-sky-700 dark:text-sky-200 rounded-full font-medium transition-colors"
                                                        aria-label={`View ${term.name} in glossary`}
                                                    >
                                                        {term.name}
                                                    </button>
                                                ) : null;
                                            })}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ) : (
                        <div className="p-8 text-center text-gray-500 dark:text-gray-400">
                            <p>Select a lab to see its details.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

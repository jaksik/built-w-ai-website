import React from 'react';
import { Tool } from '../../data/tools-data';

interface ToolCardProps {
    tool: Tool;
}

const ToolCard = ({ tool }: ToolCardProps) => (
    <a
        href={tool.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group block p-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 
        shadow-sm hover:shadow-lg transition-all duration-200 ease-in-out 
        hover:border-gray-300 dark:hover:border-gray-700 
        hover:bg-gray-50 dark:hover:bg-gray-800/50"
    >
        <div className="flex gap-4">
            {/* Logo Section */}
            <div className="w-12 h-12 bg-white flex-shrink-0 flex items-center justify-center rounded-lg m-2 ms-3 
                ring-1 ring-gray-200 dark:ring-gray-800 group-hover:ring-gray-300 dark:group-hover:ring-gray-700 
                transition-all duration-200">
                <img
                    src={tool.logoUrl}
                    alt={`${tool.name} logo`}
                    className="object-contain rounded-md"
                    loading="lazy"
                    onError={(e) => {
                        e.currentTarget.src = '/default-tool-icon.svg'
                    }}
                />
            </div>

            {/* Content Section */}
            <div className="flex flex-col flex-grow min-w-0">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors">
                    {tool.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {tool.category}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {tool.description}
                </p>
            </div>
           <div className="w-7 h-7 flex-shrink-0 flex items-center justify-center 
                translate-x-0 group-hover:translate-x-0.5 transition-transform duration-200">
                                    <svg
                    className="w-6 h-6 text-blue-600 dark:text-sky-400 flex-shrink-0"
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
        </div>
    </a>
);

export default ToolCard;
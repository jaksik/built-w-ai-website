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
        className="block p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm transition-all hover:shadow-md hover:border-gray-300 dark:hover:border-gray-700"
    >
        <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white flex items-center justify-center rounded-md">
                    <img
                        src={tool.logoUrl}
                        alt={`${tool.name} logo`}
                        className="w-full h-full object-contain rounded-md"
                        loading="lazy"
                        onError={(e) => {
                            e.currentTarget.src = '/default-tool-icon.svg'
                        }}
                    />
                </div>
                <div className="flex flex-col">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                        {tool.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        {tool.category}
                    </p>
                </div>
            </div>
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
    </a>
);

export default ToolCard;
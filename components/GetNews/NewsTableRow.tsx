import React from 'react';
import { INews } from '@/models/News';
import { formatDate } from '@/lib/dateUtils';

interface NewsTableRowProps {
    article: INews;
    onToggleActive: (id: string, currentActive: boolean) => Promise<void>;
}

const truncateText = (text: string, maxLength: number = 100) => {
    return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
};

const getCategoryColorClasses = (category: string): string => {
    switch (category) {
        case 'Macro Shifts':
            return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800';
        case 'AI Agents':
            return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-800';
        case 'Startups':
            return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800';
        case 'Research':
            return 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-800';
        case 'Other':
            return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300 dark:border-red-800';
        default:
            return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300 dark:border-gray-800';
    }
};

export const NewsTableRow = ({ article, onToggleActive }: NewsTableRowProps) => (
    <tr key={article._id.toString()} className="transition-colors">
        <td className="w-2/12 px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
            {formatDate(article.publishedAt)}
        </td>

        <td className="w-7/12 px-6 py-4 whitespace-normal">
            <div className="flex flex-col">
                <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-md font-medium text-gray-900 hover:text-blue-500 dark:text-gray-100 dark:hover:text-blue-400 transition-colors"
                >
                    {truncateText(article.title)}
                </a>
                <span className="text-xs pt-3 text-gray-700 dark:text-gray-300">{article.source}</span>
            </div>
        </td>

        <td className="w-1/12 px-6 py-4 whitespace-nowrap">
            <span className={`px-3 py-1 text-xs leading-5 font-medium rounded-lg ${getCategoryColorClasses(article.category)}`}>
                {article.category}
            </span>
        </td>
    </tr>
);
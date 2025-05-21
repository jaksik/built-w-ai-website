import React from 'react';
import { IArticle } from '@/models/Article';
import { formatDate } from '@/lib/dateUtils';

interface ArticleTableProps {
    articles: IArticle[];
    isLoading?: boolean;
}

const truncateText = (text: string, maxLength: number = 100) => {
    return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
};

export const MobileArticleTable = ({ articles, isLoading = false }: ArticleTableProps ) => (
    <div className="bg-white dark:bg-gray-800/50 rounded-xl shadow-lg overflow-hidden border dark:border-gray-700">
        <div className="overflow-x-auto">
            <table className="w-full table-fixed divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                        <th scope="col" className="w-2/12 px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                            Published
                        </th>
                    </tr>
                </thead>
                
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {!isLoading && articles.map((article) => (
                        <div>
                            <td className="px-6 py-4 whitespace-normal">
                                <div className="flex flex-col">
                                    <span className="text-xs pb-2 text-gray-700 dark:text-gray-300">
                                        {formatDate(article.publishedAt)}
                                    </span>
                                    <a
                                        href={article.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-md font-semibold text-gray-900 hover:text-blue-500 dark:text-gray-100 dark:hover:text-blue-400 transition-colors font-inter"
                                    >
                                        {truncateText(article.title)}
                                    </a>
                                    <span className="text-xs pt-3 text-gray-700 dark:text-gray-300">
                                        {article.source}
                                    </span>
                                </div>
                            </td>
                        </div>
                    ))}

                    {/* Render filler when loading */}
                    {isLoading && [...Array(8)].map((_, i) => (
                        <tr key={i}>
                            <td className="w-full px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-60"></div>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    </div>
);
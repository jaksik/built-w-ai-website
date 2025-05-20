import React from 'react';
import { INews } from '@/models/News';
import { formatDate } from '@/lib/dateUtils';
import { NewsTableRow } from './NewsTableRow';

interface NewsTableProps {
    news: INews[];
    onToggleActive: (id: string, currentActive: boolean) => Promise<void>;
    isLoading?: boolean;
}

export const NewsTable = ({ news, onToggleActive, isLoading = false }: NewsTableProps) => (
    <div className="bg-white dark:bg-gray-800/50 rounded-xl shadow-lg overflow-hidden border dark:border-gray-700">
        <div className="overflow-x-auto">
            <table className="w-full table-fixed divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                        <th scope="col" className="w-2/12 px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                            Published
                        </th>
                        <th scope="col" className="w-8/12 px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                            Title
                        </th>

                        <th scope="col" className="w-2/12 px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                            Category
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {!isLoading && news.map((article) => (
                        <NewsTableRow
                            key={article._id.toString()}
                            article={article}
                            onToggleActive={onToggleActive}
                        />
                    ))}

                    {/* Render filler when loading */}
                    {isLoading && [...Array(8)].map((_, i) => (
                        <tr key={i}>
                            <td className="w-2/12 px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-20"></div>
                            </td>
                            <td className="w-8/12 px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-50"></div>
                            </td>
                            <td className="w-2/12 px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-20"></div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);
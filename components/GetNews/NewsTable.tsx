import React from 'react';
import { INews } from '@/models/News';
import { formatDate } from '@/lib/dateUtils';
import { NewsTableRow } from './NewsTableRow';

interface NewsTableProps {
    news: INews[];
    onToggleActive: (id: string, currentActive: boolean) => Promise<void>;
}

export const NewsTable = ({ news, onToggleActive }: NewsTableProps) => (
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
                    {news.map((article) => (
                        <NewsTableRow
                            key={article._id.toString()}
                            article={article}
                            onToggleActive={onToggleActive}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);
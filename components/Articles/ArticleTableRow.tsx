import React from 'react';
import { IArticle } from '@/models/Article';
import { formatDate } from '@/lib/dateUtils';
import { getCategoryColorClasses } from './CategoryColorClasses';

interface ArticleTableRowProps {
    article: IArticle;
}

const truncateText = (text: string, maxLength: number = 100) => {
    return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
};

export const ArticleTableRow = ({ article }: ArticleTableRowProps) => (
    <tr key={article._id.toString()} className="transition-colors">
        <td className="w-2/12 px-6 py-4 whitespace-nowrap text-sm md:text-[0.725rem] text-gray-500 dark:text-gray-400">
            {formatDate(article.publishedAt)}
        </td>

        <td className="w-7/12 py-2 md:pl-2 whitespace-normal">
            <div className="flex flex-col">
                <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-md font-medium text-gray-900 hover:text-blue-500 dark:text-gray-100 dark:hover:text-blue-400 transition-colors font-inter"
                >
                    {truncateText(article.title)}
                </a>
                <span className="text-xs pt-1 md:text-[0.625rem] text-gray-700 dark:text-gray-300">
                    {article.source}
                </span>
            </div>
        </td>

        <td className="w-1/12 px-6 py-4 whitespace-nowrap">
            <span className={`px-3 py-1 text-xs leading-5 font-medium rounded-lg ${getCategoryColorClasses(article.category)}`}>
                {article.category}
            </span>
        </td>
    </tr>
);
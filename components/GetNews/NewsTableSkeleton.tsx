import React from 'react';

export const NewsTableSkeleton = () => (
  <div className="bg-white dark:bg-gray-800/50 rounded-xl shadow-lg overflow-hidden border dark:border-gray-700 animate-pulse">
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-50 dark:bg-gray-800">
          <tr>
            {[...Array(3)].map((_, i) => (
              <th key={i} scope="col" className="px-6 py-3">
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-20"></div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          {[...Array(3)].map((_, i) => (
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
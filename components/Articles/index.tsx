import React, { useEffect, useState } from 'react';
import { IArticle } from '@/models/Article';
import { ArticleTable } from './ArticleTable';
import { MobileArticleTable } from './MobileArticleTable';
import { Pagination } from './Pagination';

interface PaginationData {
  currentPage: number;
  totalPages: number;
  totalCount: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  limit: number;
}

const GetArticles: React.FC = () => {
  const [articles, setArticles] = useState<IArticle[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pagination, setPagination] = useState<PaginationData | null>(null);

  const fetchArticles = async (page: number) => {
    try {
      setIsLoading(true);
      const response = await fetch(`/api/articles?page=${page}&limit=25`);
      if (!response.ok) {
        throw new Error('Failed to fetch articles');
      }
      const { data, pagination: paginationData } = await response.json();

      // Create a promise that resolves after 100ms for smooth loading
      const minLoadingTime = new Promise(resolve => setTimeout(resolve, 100));

      // Wait for both the data and the minimum time
      await Promise.all([minLoadingTime]);
      
      setArticles(data);
      setPagination(paginationData);
      setError('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    fetchArticles(page);
    // Instantly scroll to top when changing pages
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  useEffect(() => {
    fetchArticles(1);
  }, []);

  if (error) {
    return (
      <div className="max-w-[900px] mx-auto my-8">
        <div className="text-red-600 p-4 rounded-xl bg-red-50 border border-red-200 dark:bg-red-900/30 dark:border-red-800 dark:text-red-300">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="mx-auto">
        {/* Articles count and loading indicator */}
        {/* {pagination && !isLoading && (
          <div className="mb-4 text-sm text-gray-600 dark:text-gray-400 text-center">
            Showing {((pagination.currentPage - 1) * pagination.limit) + 1} to{' '}
            {Math.min(pagination.currentPage * pagination.limit, pagination.totalCount)} of{' '}
            {pagination.totalCount} articles
          </div>
        )} */}

        <div className="block md:hidden">
          <MobileArticleTable
            articles={articles}
            isLoading={isLoading}
          />
        </div>

        <div className="hidden md:block">
          <ArticleTable
            articles={articles}
            isLoading={isLoading}
          />
        </div>

        {/* Pagination */}
        {pagination && (
          <Pagination
            currentPage={pagination.currentPage}
            totalPages={pagination.totalPages}
            onPageChange={handlePageChange}
            isLoading={isLoading}
          />
        )}
      </div>
    </div>
  );
};

export default GetArticles;
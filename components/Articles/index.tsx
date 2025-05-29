import React, { useEffect, useState } from 'react';
import { IArticle } from '@/models/Article';
import { ArticleTable } from './ArticleTable';
import { MobileArticleTable } from './MobileArticleTable';

const GetArticles: React.FC = () => {
  const [articles, setArticles] = useState<IArticle[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('/api/articles');
        if (!response.ok) {
          throw new Error('Failed to fetch articles');
        }
        const { data } = await response.json();

        // Create a promise that resolves after 1 second
        const minLoadingTime = new Promise(resolve => setTimeout(resolve, 100));

        // Wait for both the data and the minimum time
        await Promise.all([minLoadingTime]);
        
        // Sort articles by publishedDate in descending order (newest first)
        const sortedArticles = data.sort((a: IArticle, b: IArticle) => {
          if (!a.publishedDate && !b.publishedDate) return 0;
          if (!a.publishedDate) return 1; // Put articles without dates at the end
          if (!b.publishedDate) return -1; // Put articles without dates at the end
          return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime();
        });
        
        setArticles(sortedArticles);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticles();
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
      </div>
    </div>
  );
};

export default GetArticles;
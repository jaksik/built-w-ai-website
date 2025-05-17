import React, { useEffect, useState } from 'react';
import { INews } from '@/models/News';
import { NewsHeader } from './NewsHeader';
import { NewsTable } from './NewsTable';
import { NewsTableSkeleton } from './NewsTableSkeleton';

const GetNews: React.FC = () => {
  const [news, setNews] = useState<INews[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('/api/news');
        if (!response.ok) {
          throw new Error('Failed to fetch news');
        }
        const { data } = await response.json();
        setNews(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
  }, []);

  const handleToggleActive = async (id: string, currentActive: boolean) => {
    try {
      const response = await fetch(`/api/news`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          newsId: id,
          active: !currentActive,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to update news article');
      }

      setNews(news.map(article => 
        article._id.toString() === id 
          ? { ...article, active: !currentActive }
          : article
      ));
    } catch (err) {
      console.error('Update error:', err);
      alert('Failed to update news article');
    }
  };

   if (isLoading) {
    return (
      <div className="space-y-8 pb-8">
        <NewsHeader />
        <div className="max-w-[1200px] mx-auto px-4">
          <NewsTableSkeleton />
        </div>
      </div>
    );
  }

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
    <div className="space-y-8 pb-8 min-h-screen">
      <NewsHeader />
      <div className="max-w-[1200px] mx-auto px-4">
        <NewsTable news={news} onToggleActive={handleToggleActive} />
      </div>
    </div>
  );
};

export default GetNews;
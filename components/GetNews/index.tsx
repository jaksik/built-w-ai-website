import React, { useEffect, useState } from 'react';
import { INews } from '@/models/News';
import { NewsTable } from './NewsTable';
import { NewsTableSkeleton } from './NewsTableSkeleton';
import { getCategoryColorClasses } from './CategoryColorClasses';

const categories = [
  "All",
  "Macro Shifts",
  "AI Agents",
  "Startups",
  "Research",
  "Other"
];

const GetNews: React.FC = () => {
  const [news, setNews] = useState<INews[]>([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const filteredNews = activeFilter === "All"
    ? news
    : news.filter(article => article.category === activeFilter);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('/api/news');
        if (!response.ok) {
          throw new Error('Failed to fetch news');
        }
        const { data } = await response.json();
        // Create a promise that resolves after 2 seconds
        const minLoadingTime = new Promise(resolve => setTimeout(resolve, 1500));

        // Wait for both the data and the minimum time
        await Promise.all([minLoadingTime]);
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
      <div className="max-w-[1200px] mx-auto px-4">
        <NewsTableSkeleton />
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
    <div>
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="mb-6 flex gap-2 flex-wrap justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all
              ${category === activeFilter ? 'ring-2 ring-offset-2 ' : ''}
              ${category === "All"
                  ? activeFilter === category
                    ? "bg-white text-gray-900 ring-gray-400 dark:bg-gray-900 dark:text-white dark:ring-gray-900"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                  : getCategoryColorClasses(category)
                }`}
            >
              {category}
            </button>
          ))}
        </div>
        <NewsTable news={filteredNews} onToggleActive={handleToggleActive} />
      </div>
    </div>
  );
};

export default GetNews;
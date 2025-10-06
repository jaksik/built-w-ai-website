import { useState, useEffect } from 'react';
import tutorialData from '@/data/tutorials.json';

interface Tutorial {
  id: string;
  title: string;
  videoId: string;
  description: string;
  tags: string[];
}

const TutorialGrid = () => {
  const [tutorials, setTutorials] = useState<Tutorial[]>([]);

  useEffect(() => {
    setTutorials(tutorialData.tutorials);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        {tutorials.map((tutorial) => (
          <div 
            key={tutorial.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
          >
            <div className="relative w-full pt-[56.25%]">
              <iframe
                src={`https://www.youtube.com/embed/${tutorial.videoId}`}
                title={tutorial.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {tutorial.title}
              </h3>
                 {/* <p className="text-gray-600 dark:text-gray-300 text-sm">
                {tutorial.description}
              </p> */}
              <div className="mt-3 flex flex-wrap gap-2">
                {tutorial.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TutorialGrid;
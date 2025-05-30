import { NextApiRequest, NextApiResponse } from 'next';
import { dbConnect } from '@/lib/db';
import Article from '@/models/Article';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  switch (req.method) {
    case 'GET':
      try {
        const { category, active, page = '1', limit = '25' } = req.query;
        
        const pageNumber = parseInt(page as string, 10);
        const limitNumber = parseInt(limit as string, 10);
        const skip = (pageNumber - 1) * limitNumber;
        
        const query: Record<string, unknown> = {
          isHidden: { $ne: true } // Get articles that are not hidden or don't have isHidden field
        };
        
        console.log('Fetching Articles with query:', query, 'Page:', pageNumber, 'Limit:', limitNumber);

        // Get articles with pagination
        const articles = await Article.find(query)
          .sort({ publishedDate: -1 })
          .skip(skip)
          .limit(limitNumber);

        // Get total count for pagination info
        const totalCount = await Article.countDocuments(query);
        const totalPages = Math.ceil(totalCount / limitNumber);
        const hasNextPage = pageNumber < totalPages;
        const hasPrevPage = pageNumber > 1;

        console.log('Found Articles:', articles.length, 'Total:', totalCount, 'Pages:', totalPages);
        
        res.status(200).json({ 
          source: 'article-api',
          data: articles,
          pagination: {
            currentPage: pageNumber,
            totalPages,
            totalCount,
            hasNextPage,
            hasPrevPage,
            limit: limitNumber
          }
        });

      } catch (error) {

        console.error('GET Error:', error);

        res.status(500).json({ 
          error: 'Failed to fetch Article',
          details: error instanceof Error ? error.message : 'Unknown error'
        });
        
      }
      break;
  
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}
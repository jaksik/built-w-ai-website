import { NextApiRequest, NextApiResponse } from 'next';
import { dbConnect } from '@/lib/db';
import Article from '@/models/Article';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  switch (req.method) {
    case 'GET':
      try {
        const { category, active } = req.query;
        const query: Record<string, unknown> = {};
        
        console.log('Fetching Article with query:', query);

        const articles = await Article.find(query).sort({ createdAt: -1 });

        console.log('Found Article articles:', articles.length);
        console.log('Response from Article API');
        
        res.status(200).json({ 
          source: 'article-api',
          data: articles 
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
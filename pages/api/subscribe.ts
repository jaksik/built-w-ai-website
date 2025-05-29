import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  const publicationId = process.env.NEXT_PUBLIC_BEEHIIV_PUBLICATION_ID;
  const apiToken = process.env.BEEHIIV_API_TOKEN;

  if (!publicationId) {
    return res.status(500).json({ error: 'Publication ID not configured' });
  }

  if (!apiToken) {
    return res.status(500).json({ error: 'Beehiiv API token not configured' });
  }

  console.log('🚀 Server-side subscription attempt');
  console.log('📧 Email:', email);
  console.log('🔑 Publication ID:', publicationId);
  console.log('🔐 API Token configured:', !!apiToken);

  try {
    // Use the official Beehiiv API endpoint
    const apiUrl = `https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions`;
    
    console.log('🌐 Using official Beehiiv API URL:', apiUrl);

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiToken}`,
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        reactivate_existing: false,
        send_welcome_email: true,
        utm_source: 'website',
        utm_medium: 'organic',
        referring_site: req.headers.origin || req.headers.referer || 'direct',
      }),
    });

    console.log('📡 API Response status:', response.status);
    console.log('📡 API Response headers:', Object.fromEntries(response.headers));

    const responseData = await response.json();
    console.log('📡 API Response data:', responseData);

    if (response.ok) {
      console.log('✅ Subscription successful!');
      return res.status(200).json({ 
        success: true, 
        message: 'Successfully subscribed!',
        data: responseData 
      });
    } else {
      console.error('❌ API error response:', responseData);
      
      // Handle specific error cases
      if (response.status === 409 && responseData.error?.includes('already exists')) {
        return res.status(200).json({ 
          success: true, 
          message: 'You are already subscribed!',
          data: responseData 
        });
      }
      
      return res.status(response.status).json({ 
        error: responseData.error || 'Subscription failed',
        details: responseData
      });
    }

  } catch (error) {
    console.error('💥 Server subscription error:', error);
    return res.status(500).json({ 
      error: 'Internal server error', 
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}

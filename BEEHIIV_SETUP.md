# Beehiiv Newsletter Integration Setup

This project includes a Beehiiv newsletter subscription form that integrates with the official Beehiiv API.

## Setup Instructions

### 1. Get Your Beehiiv API Token

1. Log in to your Beehiiv account
2. Go to Settings → Integrations → API
3. Generate a new API token
4. Copy the token (it will look like: `bh_123abc...`)

### 2. Configure Environment Variables

Add your Beehiiv API token to your `.env.local` file:

```bash
# Beehiiv Configuration
NEXT_PUBLIC_BEEHIIV_PUBLICATION_ID=pub_b5224d2b-3cc8-4678-a654-ca639657a775
BEEHIIV_API_TOKEN=your_actual_api_token_here
```

**Important:** Replace `your_actual_api_token_here` with your real Beehiiv API token.

### 3. How It Works

The integration consists of:

- **Client Component** (`components/BeehiivForm/index.tsx`): The form UI with validation and loading states
- **API Route** (`pages/api/subscribe.ts`): Server-side endpoint that securely calls the Beehiiv API
- **Environment Variables**: Configuration for publication ID and API token

### 4. Features

- ✅ Email validation
- ✅ Loading states and error handling
- ✅ Success confirmation
- ✅ Handles duplicate subscriptions gracefully
- ✅ Modern styling that matches Beehiiv's native form design
- ✅ Inter font family for consistency
- ✅ Responsive inline layout (email input + submit button)
- ✅ TypeScript support
- ✅ Dark mode support
- ✅ Comprehensive logging for debugging

### 5. API Endpoint

The form calls `/api/subscribe` which:
- Validates the email address
- Calls the official Beehiiv API: `https://api.beehiiv.com/v2/publications/{publication_id}/subscriptions`
- Uses Bearer token authentication
- Handles various response scenarios
- Returns JSON success/error responses

### 6. Testing

You can test the form by:
1. Ensuring your API token is configured
2. Running the development server: `npm run dev`
3. Navigating to a page with the BeehiivForm component
4. Entering an email address and submitting
5. Checking the browser console for detailed logs

### 7. Usage in Components

```tsx
import { BeehiivForm } from '../components/BeehiivForm';

export default function MyPage() {
  return (
    <div>
      <BeehiivForm 
        title="Subscribe to Our Newsletter"
        description="Get weekly AI insights"
        buttonText="Join Now"
      />
    </div>
  );
}
```

### 8. Troubleshooting

- Check browser console for detailed logging
- Verify API token is correct in `.env.local`
- Ensure publication ID matches your Beehiiv publication
- Check network tab for API request/response details

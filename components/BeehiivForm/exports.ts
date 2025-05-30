// Export the original form (now refactored to use the hook)
export { BeehiivForm } from './index';

// Export all the new form variations
export { BeehiivMinimalForm } from './BeehiivMinimalForm';
export { BeehiivCardForm } from './BeehiivCardForm';
export { BeehiivModalForm } from './BeehiivModalForm';
export { BeehiivBannerForm } from './BeehiivBannerForm';

// Export the hook for custom implementations
export { useBeehiivSubscription } from '../../hooks/useBeehiivSubscription';

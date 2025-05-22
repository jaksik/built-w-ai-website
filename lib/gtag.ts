// filepath: lib/gtag.ts
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';

// Log a page view
export const pageview = (url: URL): void => {
  if (GA_TRACKING_ID && typeof window.gtag === 'function') {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Log a specific event
interface EventParams {
  action: string;
  category: string;
  label: string;
  value?: number;
}
export const event = ({ action, category, label, value }: EventParams): void => {
  if (GA_TRACKING_ID && typeof window.gtag === 'function') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};
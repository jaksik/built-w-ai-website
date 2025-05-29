export const formatDate = (date: Date | undefined) => {
  if (!date) {
    return 'N/A';
  }
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC' // Added to ensure date is formatted in UTC
  });
};
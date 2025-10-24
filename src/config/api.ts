export const API_BASE_URL = 
  window.location.hostname === 'localhost' 
    ? 'https://localhost:7031' 
    : 'https://api.stgeorge.ca';

export const API_ENDPOINTS = {
  EVENTS_CURRENT: `${API_BASE_URL}/events/current`,
} as const;

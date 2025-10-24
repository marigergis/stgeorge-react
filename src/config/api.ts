export const API_BASE_URL = 
  window.location.hostname === 'localhost' 
    ? 'https://localhost:7031' 
    : 'https://portal.stgeorge.ca/api';

export const API_ENDPOINTS = {
  EVENTS_CURRENT: `${API_BASE_URL}/events/current`,
} as const;

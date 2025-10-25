import React, { useEffect, useState } from 'react';
import './EventsCalendar.tsx.css';
import { API_ENDPOINTS } from '../config/api';
import Footer from '../components/Footer'; // Import the Footer component


interface Event {
  eventId: number;
  eventFrom: string;
  eventTo: string;
  activity: string;
  church: string;
  priest: string;
  locationUrl: string;
  isActive: boolean;
  isAllDayEvent: boolean;
  isCancelled: boolean;
  isCorrection: boolean;
  isNew: boolean;
  moreInfo: string | null;
}

interface GroupedEvents {
  [date: string]: Event[];
}

const EventsCalendar: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(API_ENDPOINTS.EVENTS_CURRENT);
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }
        const data = await response.json();
        console.log('API Response:', data);
        setEvents(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        console.error('Error fetching events:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const groupEventsByDate = (events: Event[]): GroupedEvents => {
    return events.reduce((grouped: GroupedEvents, event) => {
      // Extract date from eventFrom (format: "2025-10-24T19:00:00")
      const dateKey = event.eventFrom.split('T')[0];
      if (!grouped[dateKey]) {
        grouped[dateKey] = [];
      }
      grouped[dateKey].push(event);
      return grouped;
    }, {});
  };

  const formatDate = (dateString: string): string => {
    if (!dateString) return 'Invalid Date';
    
    const date = new Date(dateString);
    
    if (isNaN(date.getTime())) {
      console.error('Invalid date:', dateString);
      return 'Invalid Date';
    }
    
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat','Sun'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    return `${days[date.getDay()]} ${months[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`;
  };

  const formatTime = (dateTimeString: string): string => {
    if (!dateTimeString) return '';
    
    try {
      const date = new Date(dateTimeString);
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const ampm = hours >= 12 ? 'pm' : 'am';
      const displayHour = hours % 12 || 12;
      const displayMinutes = minutes.toString().padStart(2, '0');
      return `${displayHour}:${displayMinutes} ${ampm}`;
    } catch (err) {
      return '';
    }
  };

  const getIconUrl = (activity: string): string | null => {
    // Check if activity contains "liturgy" (case-insensitive)
    if (activity.toLowerCase().includes('liturgy')) {
      return 'https://portal.stgeorge.ca/images/censor35x58.png';
    }
    
    // Return null for activities that don't have an icon
    return null;
  };

  if (loading) {
    return <div className="loading">Loading events...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  if (events.length === 0) {
    return <div className="loading">No events found.</div>;
  }

  const groupedEvents = groupEventsByDate(events);

return (
    <div className="events-calendar">
      <table className="events-table">
        <tbody>
          {Object.entries(groupedEvents).map(([date, dateEvents]) => (
            <React.Fragment key={`date-${date}`}>
              <tr className="date-header">
                <td colSpan={3}>{formatDate(date)}</td> {/* Adjusted colspan to 4 */}
              </tr>
              {dateEvents.map((event) => (
                <tr key={`event-${event.eventId}`} className="event-row">
                  <td className="time-column">
                    {formatTime(event.eventFrom)} - {formatTime(event.eventTo)}
                  </td>
                  <td className="title-column">
                    {event.activity}
                    {event.moreInfo && (
                      <span className="more-info"> {event.moreInfo}</span>
                    )}
                    {event.priest && <span> with {event.priest}</span>} {/* Updated to include priest's name */}
                  </td>
                  <td className="icon-column">
                    {getIconUrl(event.activity) && (
                      <img src={getIconUrl(event.activity)!} alt="Event icon" className="event-icon" />
                    )}
                  </td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
      <Footer /> {/* Add the Footer component here */}
    </div>
  );
};

export default EventsCalendar;
console.log("Events loaded:", events);

import { events } from "./eventsData";
import "./EventsPage.css";

export default function EventsPage() {
  return (
    <div className="events-page">
      <section className="events-hero">
        <h1>Events</h1>
        <p>Talks, conferences, and career opportunities</p>
      </section>

      <div className="events-container">
        {events.map(event => (
          <div key={event.id} className="event-card">
            <h3 className="event-title">{event.title}</h3>

            <p className="event-meta">
              <strong>{event.type}</strong> · {event.mode}
            </p>

            <p className="event-datetime">
              {event.date} · {event.time}
            </p>

            <p className="event-location">{event.location}</p>

            <p className="event-description">{event.description}</p>

            {event.link && (
              <a
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
                className="event-link"
              >
                Learn More →
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

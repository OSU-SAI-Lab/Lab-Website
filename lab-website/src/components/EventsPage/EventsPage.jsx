import { events } from "./eventsData";
import "./EventsPage.css";
import "../../assets/css/latestnews.css"

export default function EventsPage() {
  console.log("Events loaded:", events);

  return (
    <div className="events-page">
      {/* <section className="events-hero">
        <h1>Events</h1>
        <p>Talks, conferences, and career opportunities</p>
      </section> */}

      <h2 className="latest-news-title">Latest News</h2>

      <div className="events-container">
        {events.map(event => (
          <div key={event.id} className="event-card">
            <h3 className="event-title">{event.title}</h3>

            <p className="event-meta">
              <strong>{event.type}</strong> · {event.mode}
            </p>

            <p className="event-datetime">
              {event.date}
              {event.time && ` · ${event.time}`}
            </p>

            <p className="event-location">{event.location}</p>

            <p className="event-description">{event.description}</p>

            {/* Members involved */}
            {event.members && (
              <div className="event-members">
                <strong>Lab Members Involved:</strong>
                <ul>
                  {event.members.map((m, idx) => (
                    <li key={idx}>
                      <a href={m.profileUrl}>{m.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {/* Article link */}
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

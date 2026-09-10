import { events } from "../data/events";
import EventCard from "./EventCard";

function Events({ onEventClick }) {
  return (
    <section id="events">
      <div className="reveal">
        <h2 className="section-title nc">
          Battle Events
        </h2>

        <p className="section-sub">
          Choose your arena. Each event is a new challenge.
        </p>
      </div>

      <div className="events-grid">
        {events.map((event) => (
          <EventCard
            key={event.id}
            event={event}
            onClick={onEventClick}
          />
        ))}
      </div>
    </section>
  );
}

export default Events;
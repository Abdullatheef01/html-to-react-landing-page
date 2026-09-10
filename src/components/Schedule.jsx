import { schedule } from "../data/events";

function Schedule({ onEventClick }) {
  return (
    <section id="schedule">
      <div className="reveal">
        <h2 className="section-title ng">
          Battle Timeline
        </h2>

        <p className="section-sub">
          The schedule of events. Plan your conquest.
        </p>
      </div>

      <div className="timeline">
        {schedule.map((item, index) => {
          const hasEvent = item.eventId !== null;

          return (
            <div className="tl-item reveal" key={index}>
              <div className="tl-dot" />

              <div
                className={`tl-card ${
                  hasEvent ? "clickable" : ""
                }`}
                onClick={() => {
                  if (hasEvent) {
                    onEventClick(item.eventId);
                  }
                }}
              >
                <p className="tl-time">
                  {item.time}
                </p>

                <p className="tl-event">
                  {item.event}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Schedule;
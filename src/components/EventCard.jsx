import hammerTitan from "../assets/hammer_titan.jpg";
import kakashi from "../assets/kakashi.jpg";
import edwardElric from "../assets/edward_elric.jpg";
import aizen from "../assets/aizen.jpg";
import luffy from "../assets/luffy.jpg";
import gojo from "../assets/gojo.jpg";
import sungjinwoo from "../assets/sungjinwoo.jpg";
import lelouch from "../assets/lelouch.jpg";
import itachi from "../assets/itachi.jpg";
import saitama from "../assets/saitama.jpg";

import { categories } from "../data/events";

const eventImages = {
  hammer_titan: hammerTitan,
  kakashi: kakashi,
  edward_elric: edwardElric,
  aizen: aizen,
  luffy: luffy,
  gojo: gojo,
  sungjinwoo: sungjinwoo,
  lelouch: lelouch,
  itachi: itachi,
  saitama: saitama,
};

function EventCard({ event, onClick }) {
  const image = eventImages[event.image];

  /*
   * IMPORTANT:
   * event.category is a STRING:
   *
   * "technical"
   * "semi-technical"
   * "esports"
   * "non-technical"
   *
   * So we need to look it up in categories.
   */
  const category = categories[event.category];

  return (
    <article
      className={`event-card ${category?.bp || ""}`}
      style={{
        borderColor:
          category?.color || "hsl(330,100%,58%)",
      }}
      onClick={() => onClick(event.id)}
    >
      <div className="card-media-wrap">
        <img
          src={image}
          alt={event.animeName}
        />

        <div className="card-overlay" />

        {/* CATEGORY */}
        <div
          className="card-badge"
          style={{
            color:
              category?.color ||
              "hsl(330,100%,58%)",
            borderColor:
              category?.color ||
              "hsl(330,100%,58%)",
          }}
        >
          {category?.label || event.category}
        </div>

        <div className="card-info">
          {/* CATEGORY / ANIME */}
          <p
            className="card-anime"
            style={{
              color:
                category?.color ||
                "hsl(330,100%,58%)",
            }}
          >
            {category?.label || event.category}
          </p>

          {/* EVENT NAME */}
          <h3 className="card-name">
            {event.name}
          </h3>

          {/* ANIME NAME */}
          <p className="card-team">
            {event.animeName}
          </p>
        </div>
      </div>
    </article>
  );
}

export default EventCard;
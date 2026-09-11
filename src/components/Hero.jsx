function Hero() {
  return (
    <section id="hero">
      <div id="hero-fallback" />

      <div className="hero-video-overlay" />
      <div className="hero-video-overlay2" />

      <div id="particles" />

      <div className="hero-content">
        <p className="hero-pre">
          St. Joseph's College of Engineering &amp; Technology,
          Thanjavur
          <br />
          CSE Department Presents
        </p>

        <h1 className="hero-t1 np">
          TITAN
        </h1>

        <h1 className="hero-t2 nc">
          TECHFEST
        </h1>

        <p className="hero-year ng">
          2K26
        </p>

        <div className="hero-date">
          <span
            style={{
              fontFamily: "Audiowide, sans-serif",
              fontSize: ".7rem",
              letterSpacing: ".2em",
              textTransform: "uppercase",
              padding: ".4rem 1.2rem",
              borderRadius: "999px",
              border: "1px solid hsl(var(--gold) / .4)",
              color: "hsl(var(--gold))",
              background: "hsl(var(--gold) / .08)",
            }}
          >
            📅 15th April 2026
          </span>
        </div>

        <div className="hero-guest">
          <p
            style={{
              fontFamily: "Audiowide, sans-serif",
              fontSize: ".62rem",
              letterSpacing: ".25em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,.7)",
              marginBottom: ".35rem",
            }}
          >
            Chief Guest
          </p>

          <p
            style={{
              fontFamily: "Orbitron, sans-serif",
              fontSize: "1.1rem",
              fontWeight: 700,
              color: "hsl(var(--gold))",
              textShadow:
                "0 0 7px hsl(var(--gold) / .8)",
            }}
          >
            Goofygen
          </p>

          <p
            style={{
              fontSize: ".75rem",
              color: "rgba(255,255,255,.6)",
              marginTop: ".2rem",
            }}
          >
            Chess Player &amp; Influencer
          </p>
        </div>

        <p className="hero-sub">
          Where anime meets technology. 10 epic events.
          One legendary fest.
        </p>

        <a
          href="#register"
          className="neon-btn"
        >
          Register Now
        </a>

        <div className="scroll-arrow">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              color: "rgba(255,255,255,.5)",
              margin: "0 auto",
              display: "block",
            }}
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Hero;
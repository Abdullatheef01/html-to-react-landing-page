function Register() {
  return (
    <section id="register">
      <div
        className="reveal"
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
        }}
      >
        <h2 className="section-title np">
          Join the Battle
        </h2>

        <p
          className="section-sub"
          style={{ marginBottom: "2.5rem" }}
        >
          Register now and claim your spot in the arena.
        </p>

        <a
          href="https://forms.google.com"
          target="_blank"
          rel="noreferrer"
          className="neon-btn"
        >
          Register Now
        </a>

        <p
          style={{
            color: "var(--muted)",
            fontSize: ".85rem",
            marginTop: "1.5rem",
          }}
        >
          Open to all departments
        </p>
      </div>
    </section>
  );
}

export default Register;
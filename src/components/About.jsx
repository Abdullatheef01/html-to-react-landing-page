function About() {
  return (
    <section id="about">
      <div className="reveal">
        <h2 className="section-title np">
          About the Fest
        </h2>

        <p className="section-sub">
          Where legends are forged and champions rise.
        </p>
      </div>

      <div className="about-inner reveal">
        <div className="about-text">
          <p>
            Welcome to{" "}
            <strong style={{ color: "hsl(var(--pink))" }}>
              Titan Techfest 2K26
            </strong>{" "}
            — the annual technical festival of the
            Department of Computer Science &amp; Engineering,
            hosted at{" "}
            <strong style={{ color: "hsl(var(--cyan))" }}>
              St. Joseph's College of Engineering &amp;
              Technology, Thanjavur
            </strong>
            .
          </p>

          <p>
            This year's edition blends the world of anime
            with cutting-edge technology, bringing together
            students from across departments to compete,
            collaborate, and conquer.
          </p>

          <p>
            From high-stakes coding battles to strategic
            chess duels and epic esports showdowns — there is
            an arena for every warrior.
          </p>
        </div>

        <div className="about-stats">
          <div className="stat-box">
            <div className="stat-num nc">10</div>
            <div className="stat-label">
              Epic Events
            </div>
          </div>

          <div className="stat-box">
            <div className="stat-num np">1</div>
            <div className="stat-label">
              Legendary Day
            </div>
          </div>

          <div className="stat-box">
            <div className="stat-num ng">∞</div>
            <div className="stat-label">
              Glory Awaits
            </div>
          </div>

          <div className="stat-box">
            <div className="stat-num npu">All</div>
            <div className="stat-label">
              Departments
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
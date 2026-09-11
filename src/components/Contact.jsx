function Contact() {
  return (
    <section id="contact">
      <div className="reveal">

        <h2 className="section-title np">
          Contact Us
        </h2>

        <p className="section-sub">
          Have questions? Reach out to the
          organizers.
        </p>

      </div>

      <div className="contact-inner reveal">

        {/* =====================================
            GET IN TOUCH
        ====================================== */}

        <div className="contact-card">

          <p className="contact-card-title">
            Get in Touch
          </p>

          {/* EMAIL */}
          <a
            href="mailto:your@email.com"
            className="contact-row"
          >
            <div className="contact-icon">
              ✉️
            </div>

            <span>
              your@email.com
            </span>
          </a>

          {/* PHONE 1 */}
          <a
            href="tel:+919999999999"
            className="contact-row"
          >
            <div className="contact-icon">
              📞
            </div>

            <span>
              +91 99999 99999
            </span>
          </a>

          {/* PHONE 2 */}
          <a
            href="tel:+918888888888"
            className="contact-row"
          >
            <div className="contact-icon">
              📞
            </div>

            <span>
              +91 88888 88888
            </span>
          </a>


          {/* =====================================
              SOCIAL MEDIA
          ====================================== */}

          <div className="contact-follow">

            <p className="contact-follow-title">
              Follow Us
            </p>

            <div className="social-links">

              {/* INSTAGRAM */}
              <a
                href="https://instagram.com/your_handle"
                target="_blank"
                rel="noreferrer"
                className="social-link"
                aria-label="Instagram"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="5"
                  />

                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                  />

                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>


              {/* YOUTUBE */}
              <a
                href="https://youtube.com/@your_channel"
                target="_blank"
                rel="noreferrer"
                className="social-link"
                aria-label="YouTube"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"
                  />

                  <polygon
                    points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>


              {/* EMAIL */}
              <a
                href="mailto:your@email.com"
                className="social-link"
                aria-label="Email"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect
                    x="2"
                    y="4"
                    width="20"
                    height="16"
                    rx="2"
                  />

                  <path
                    d="m22 7-10 7L2 7"
                  />
                </svg>
              </a>

            </div>
          </div>
        </div>


        {/* =====================================
            LOCATION & VENUE
        ====================================== */}

        <div className="contact-card">

          <p className="contact-card-title">
            Location & Venue
          </p>

          {/* LOCATION */}
          <div className="contact-row">
            <div className="contact-icon">
              📍
            </div>

            <span>
              St. Joseph's College of Engineering
              <br />
              & Technology, Thanjavur —
              613 403
            </span>
          </div>


          {/* DATE */}
          <div
            className="contact-row"
            style={{
              cursor: "default",
            }}
          >
            <div className="contact-icon">
              🗓️
            </div>

            <span>
              15th April 2026
              <br />
              9:00 AM onwards
            </span>
          </div>


          {/* VENUE */}
          <div
            className="contact-row"
            style={{
              cursor: "default",
            }}
          >
            <div className="contact-icon">
              🏛️
            </div>

            <span>
              Main Auditorium &
              <br />
              Computer Science Block
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;
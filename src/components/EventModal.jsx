import { useEffect, useRef, useState } from "react";
import { categories, events } from "../data/events";

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

function EventModal({ event, onClose, onNavigate }) {
  const flyingCardRef = useRef(null);
  const fciRef = useRef(null);
  const detailPanelRef = useRef(null);

  const mobileCoinRef = useRef(null);
  const mobileInnerRef = useRef(null);
  const mobileDetailRef = useRef(null);

  const timersRef = useRef([]);
  const firstOpenRef = useRef(true);

  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" &&
      window.innerWidth < 700
  );

  const clearTimers = () => {
    timersRef.current.forEach((timer) => {
      clearTimeout(timer);
    });

    timersRef.current = [];
  };

  /*
   * Detect mobile / desktop
   */
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 700);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /*
   * Main modal animation
   */
  useEffect(() => {
    if (!event) {
      clearTimers();

      if (flyingCardRef.current) {
        flyingCardRef.current.style.display = "none";
      }

      if (detailPanelRef.current) {
        detailPanelRef.current.classList.remove("show");
      }

      if (mobileCoinRef.current) {
        mobileCoinRef.current.style.display = "none";
      }

      if (mobileDetailRef.current) {
        mobileDetailRef.current.classList.remove("show");
      }

      firstOpenRef.current = true;

      return;
    }

    clearTimers();

    const category = categories[event.category];
    const image = eventImages[event.image];

    if (!category || !image) {
      console.error(
        "Missing category or image for event:",
        event
      );
      return;
    }

    if (isMobile) {
      openMobile(event, category, image);
    } else {
      openDesktop(event, category, image);
    }

    return clearTimers;
  }, [event, isMobile]);

  /*
   * DESKTOP
   */
  const openDesktop = (currentEvent, category, image) => {
    const flyingCard = flyingCardRef.current;
    const fci = fciRef.current;
    const detailPanel = detailPanelRef.current;

    if (!flyingCard || !fci || !detailPanel) {
      return;
    }

    const vw = window.innerWidth;
    const vh = window.innerHeight;

    /*
     * ORIGINAL CARD RATIO
     *
     * Original:
     * aspect-ratio: 3 / 4
     *
     * Therefore:
     * width = height * 3/4
     */
    const cardH = Math.min(vh * 0.78, 520);
    const cardW = cardH * (3 / 4);

    /*
     * Final position
     */
    const pad = 28;

    const finalTop = (vh - cardH) / 2;
    const finalLeft = pad;

    /*
     * Details panel position
     */
    const detailLeft = finalLeft + cardW + 30;
    const detailWidth = Math.max(
      300,
      vw - detailLeft - pad
    );

    /*
     * Category styling
     */
    flyingCard.style.border = `2px solid ${category.color}`;
    flyingCard.style.boxShadow =
      `0 0 30px ${category.color}55`;

    detailPanel.style.borderColor = category.color;
    detailPanel.style.boxShadow =
      `0 0 25px ${category.color}33`;

    detailPanel.style.top = `${finalTop}px`;
    detailPanel.style.left = `${detailLeft}px`;
    detailPanel.style.width = `${detailWidth}px`;
    detailPanel.style.height = `${cardH}px`;

    /*
     * IMPORTANT:
     * Every modal image is exactly 3:4.
     */
    flyingCard.style.width = `${cardW}px`;
    flyingCard.style.height = `${cardH}px`;

    /*
     * If modal is already open:
     * spin current card and change image.
     */
    if (
      !firstOpenRef.current &&
      flyingCard.style.display === "block"
    ) {
      detailPanel.classList.remove("show");

      /*
       * Reset rotation
       */
      fci.style.transition = "none";
      fci.style.transform = "rotateY(0deg)";

      /*
       * Force reflow
       */
      void fci.offsetWidth;

      /*
       * Spin
       */
      timersRef.current.push(
        setTimeout(() => {
          fci.style.transition =
            "transform 0.7s cubic-bezier(.4,0,.2,1)";

          fci.style.transform =
            "rotateY(360deg)";
        }, 30)
      );

      /*
       * Change image halfway through rotation
       */
      timersRef.current.push(
        setTimeout(() => {
          const frontImage =
            flyingCard.querySelector(".fci-front img");

          const backImage =
            flyingCard.querySelector(".fci-back img");

          if (frontImage) {
            frontImage.src = image;
          }

          if (backImage) {
            backImage.src = image;
          }
        }, 350)
      );

      /*
       * Finish rotation + show details
       */
      timersRef.current.push(
        setTimeout(() => {
          fci.style.transition = "none";
          fci.style.transform = "rotateY(0deg)";

          detailPanel.classList.add("show");
        }, 750)
      );

      return;
    }

    /*
     * ==========================================
     * FIRST OPEN
     * ==========================================
     */

    /*
     * Starting position:
     * CENTER OF SCREEN
     */
    const startTop = vh / 2 - cardH / 2;
    const startLeft = vw / 2 - cardW / 2;

    flyingCard.style.transition = "none";
    flyingCard.style.top = `${startTop}px`;
    flyingCard.style.left = `${startLeft}px`;

    flyingCard.style.display = "block";

    detailPanel.classList.remove(
      "show",
      "hide"
    );

    /*
     * Set image before animation
     */
    const frontImage =
      flyingCard.querySelector(".fci-front img");

    const backImage =
      flyingCard.querySelector(".fci-back img");

    if (frontImage) {
      frontImage.src = image;
      frontImage.alt = currentEvent.animeName;
    }

    if (backImage) {
      backImage.src = image;
      backImage.alt = currentEvent.animeName;
    }

    /*
     * Reset rotation
     */
    fci.style.transition = "none";
    fci.style.transform = "rotateY(0deg)";

    /*
     * ==========================================
     * STEP 1
     * CARD SPINS
     * ==========================================
     */
    timersRef.current.push(
      setTimeout(() => {
        fci.style.transition =
          "transform 0.7s cubic-bezier(.4,0,.2,1)";

        fci.style.transform =
          "rotateY(360deg)";
      }, 100)
    );

    /*
     * ==========================================
     * STEP 2
     * CARD MOVES FROM CENTER TO LEFT
     * ==========================================
     */
    timersRef.current.push(
      setTimeout(() => {
        /*
         * Reset card rotation before movement.
         */
        fci.style.transition = "none";
        fci.style.transform = "rotateY(0deg)";

        /*
         * This is the original
         * flying-card movement.
         */
        flyingCard.style.transition =
          "top 0.5s cubic-bezier(.16,1,.3,1), " +
          "left 0.5s cubic-bezier(.16,1,.3,1)";

        flyingCard.style.top =
          `${finalTop}px`;

        flyingCard.style.left =
          `${finalLeft}px`;
      }, 850)
    );

    /*
     * ==========================================
     * STEP 3
     * DETAILS SLIDE IN
     * ==========================================
     */
    timersRef.current.push(
      setTimeout(() => {
        detailPanel.classList.add("show");

        firstOpenRef.current = false;
      }, 1000)
    );
  };

  /*
   * ==========================================
   * MOBILE
   * ==========================================
   */
  const openMobile = (
    currentEvent,
    category,
    image
  ) => {
    const mobileCoin =
      mobileCoinRef.current;

    const mobileInner =
      mobileInnerRef.current;

    const mobileDetail =
      mobileDetailRef.current;

    if (
      !mobileCoin ||
      !mobileInner ||
      !mobileDetail
    ) {
      return;
    }

    const vw = window.innerWidth;
    const vh = window.innerHeight;

    /*
     * Original mobile coin size.
     */
    const coinW = 72;
    const coinH = 96;

    const coinTop = 75;
    const coinLeft =
      (vw - coinW) / 2;

    const detailWidth =
      Math.min(vw - 32, 320);

    const detailLeft =
      (vw - detailWidth) / 2;

    const detailTop =
      coinTop + coinH + 16;

    /*
     * Styling
     */
    mobileCoin.style.border =
      `2px solid ${category.color}`;

    mobileCoin.style.boxShadow =
      `0 0 20px ${category.color}55`;

    mobileDetail.style.borderColor =
      category.color;

    mobileDetail.style.width =
      `${detailWidth}px`;

    mobileDetail.style.left =
      `${detailLeft}px`;

    mobileDetail.style.top =
      `${detailTop}px`;

    mobileDetail.style.maxHeight =
      `${vh - detailTop - 20}px`;

    /*
     * Size
     */
    mobileCoin.style.width =
      `${coinW}px`;

    mobileCoin.style.height =
      `${coinH}px`;

    /*
     * Reset rotation
     */
    mobileInner.style.transition = "none";
    mobileInner.style.transform =
      "rotateY(0deg)";

    /*
     * Already open
     */
    if (
      !firstOpenRef.current &&
      mobileCoin.style.display === "block"
    ) {
      mobileDetail.classList.remove("show");

      void mobileInner.offsetWidth;

      /*
       * Spin
       */
      timersRef.current.push(
        setTimeout(() => {
          mobileInner.style.transition =
            "transform 0.5s cubic-bezier(.4,0,.2,1)";

          mobileInner.style.transform =
            "rotateY(360deg)";
        }, 30)
      );

      /*
       * Change image
       */
      timersRef.current.push(
        setTimeout(() => {
          const frontImage =
            mobileCoin.querySelector(
              ".mci-front img"
            );

          const backImage =
            mobileCoin.querySelector(
              ".mci-back img"
            );

          if (frontImage) {
            frontImage.src = image;
          }

          if (backImage) {
            backImage.src = image;
          }
        }, 250)
      );

      /*
       * Finish
       */
      timersRef.current.push(
        setTimeout(() => {
          mobileInner.style.transition =
            "none";

          mobileInner.style.transform =
            "rotateY(0deg)";

          mobileDetail.classList.add("show");
        }, 580)
      );

      return;
    }

    /*
     * FIRST MOBILE OPEN
     */
    mobileCoin.style.top =
      `${coinTop}px`;

    mobileCoin.style.left =
      `${coinLeft}px`;

    mobileCoin.style.display =
      "block";

    /*
     * Set image
     */
    const frontImage =
      mobileCoin.querySelector(
        ".mci-front img"
      );

    const backImage =
      mobileCoin.querySelector(
        ".mci-back img"
      );

    if (frontImage) {
      frontImage.src = image;
      frontImage.alt =
        currentEvent.animeName;
    }

    if (backImage) {
      backImage.src = image;
      backImage.alt =
        currentEvent.animeName;
    }

    mobileDetail.classList.remove(
      "show",
      "hide"
    );

    /*
     * Spin
     */
    timersRef.current.push(
      setTimeout(() => {
        mobileInner.style.transition =
          "transform 0.5s cubic-bezier(.4,0,.2,1)";

        mobileInner.style.transform =
          "rotateY(360deg)";
      }, 100)
    );

    /*
     * Show details
     */
    timersRef.current.push(
      setTimeout(() => {
        mobileInner.style.transition =
          "none";

        mobileInner.style.transform =
          "rotateY(0deg)";

        mobileDetail.classList.add(
          "show"
        );

        firstOpenRef.current = false;
      }, 650)
    );
  };

  /*
   * No event = no modal
   */
  if (!event) {
    return null;
  }

  const category =
    categories[event.category];

  const image =
    eventImages[event.image];

  /*
   * Background click
   */
  const handleBackgroundClick = (e) => {
    if (
      e.target === e.currentTarget
    ) {
      onClose();
    }
  };

  return (
    <>
      {/* =========================
          OVERLAY
      ========================== */}
      <div
        className="modal-overlay open"
        onClick={handleBackgroundClick}
      />

      {/* =========================
          CLOSE BUTTON
      ========================== */}
      <button
        className="modal-close-btn show"
        onClick={onClose}
        aria-label="Close modal"
      >
        ✕
      </button>

      {/* =========================
          DESKTOP FLYING CARD
      ========================== */}
      <div
        ref={flyingCardRef}
        className="flying-card"
      >
        <div
          ref={fciRef}
          className="fci"
        >
          <div className="fci-front">
            <img
              src={image}
              alt={event.animeName}
            />
          </div>

          <div className="fci-back">
            <img
              src={image}
              alt={event.animeName}
            />
          </div>
        </div>
      </div>

      {/* =========================
          DESKTOP DETAILS
      ========================== */}
      <div
        ref={detailPanelRef}
        className="detail-panel"
      >
        <p
          className="modal-cat"
          style={{
            color: category.color,
          }}
        >
          {category.label}
        </p>

        <h3 className="modal-title">
          {event.name}
        </h3>

        <p className="modal-anime">
          {event.animeName}
        </p>

        <div className="modal-grid">
          <div className="modal-field">
            <p className="modal-field-label">
              Team Size
            </p>

            <p className="modal-field-val">
              {event.teamSize}
            </p>
          </div>

          <div className="modal-field">
            <p className="modal-field-label">
              Rounds
            </p>

            <p className="modal-field-val">
              {event.rounds}
            </p>
          </div>

          <div
            className="modal-field"
            style={{
              gridColumn: "1 / -1",
            }}
          >
            <p className="modal-field-label">
              Timing
            </p>

            <p className="modal-field-val">
              {event.timing}
            </p>
          </div>
        </div>

        <p className="modal-rules-title">
          Rules
        </p>

        <ul className="modal-rules">
          {event.rules.map(
            (rule, index) => (
              <li key={index}>
                {rule}
              </li>
            )
          )}
        </ul>

        <div className="modal-nav">
          <button
            className="modal-prev"
            onClick={() =>
              onNavigate("prev")
            }
          >
            ← PREV
          </button>

          <button
            className="modal-next"
            onClick={() =>
              onNavigate("next")
            }
          >
            NEXT →
          </button>
        </div>
      </div>

      {/* =========================
          MOBILE COIN
      ========================== */}
      <div
        ref={mobileCoinRef}
        className="mobile-coin"
      >
        <div
          ref={mobileInnerRef}
          className="mobile-coin-inner"
        >
          <div className="mci-front">
            <img
              src={image}
              alt={event.animeName}
            />
          </div>

          <div className="mci-back">
            <img
              src={image}
              alt={event.animeName}
            />
          </div>
        </div>
      </div>

      {/* =========================
          MOBILE DETAILS
      ========================== */}
      <div
        ref={mobileDetailRef}
        className="mobile-detail"
      >
        <p
          className="modal-cat"
          style={{
            color: category.color,
          }}
        >
          {category.label}
        </p>

        <h3 className="modal-title">
          {event.name}
        </h3>

        <p className="modal-anime">
          {event.animeName}
        </p>

        <div className="modal-grid">
          <div className="modal-field">
            <p className="modal-field-label">
              Team Size
            </p>

            <p className="modal-field-val">
              {event.teamSize}
            </p>
          </div>

          <div className="modal-field">
            <p className="modal-field-label">
              Rounds
            </p>

            <p className="modal-field-val">
              {event.rounds}
            </p>
          </div>

          <div
            className="modal-field"
            style={{
              gridColumn: "1 / -1",
            }}
          >
            <p className="modal-field-label">
              Timing
            </p>

            <p className="modal-field-val">
              {event.timing}
            </p>
          </div>
        </div>

        <p className="modal-rules-title">
          Rules
        </p>

        <ul className="modal-rules">
          {event.rules.map(
            (rule, index) => (
              <li key={index}>
                {rule}
              </li>
            )
          )}
        </ul>

        <div className="modal-nav">
          <button
            className="modal-close-mobile"
            onClick={onClose}
          >
            ✕ Close
          </button>

          <button
            className="modal-prev"
            onClick={() =>
              onNavigate("prev")
            }
          >
            ← Prev
          </button>

          <button
            className="modal-next"
            onClick={() =>
              onNavigate("next")
            }
          >
            Next →
          </button>
        </div>
      </div>
    </>
  );
}

export default EventModal;
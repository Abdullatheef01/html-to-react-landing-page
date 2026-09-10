import { useEffect, useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Events from "./components/Events";
import Schedule from "./components/Schedule";
import Register from "./components/Register";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import EventModal from "./components/EventModal";

import { events } from "./data/events";

function App() {
  const [selectedEventId, setSelectedEventId] = useState(null);

  const selectedEvent =
    events.find((event) => event.id === selectedEventId) || null;

  const handleEventClick = (id) => {
    setSelectedEventId(id);
  };

  const handleClose = () => {
    setSelectedEventId(null);
  };

  const handleNavigate = (direction) => {
    if (!selectedEvent) return;

    const currentIndex = events.findIndex(
      (event) => event.id === selectedEvent.id
    );

    const nextIndex =
      direction === "next"
        ? (currentIndex + 1) % events.length
        : (currentIndex - 1 + events.length) % events.length;

    setSelectedEventId(events[nextIndex].id);
  };

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedEvent ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedEvent]);

useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  const revealElements = document.querySelectorAll(".reveal");

  revealElements.forEach((element) => {
    observer.observe(element);
  });

  return () => {
    observer.disconnect();
  };
}, []);
  
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Events onEventClick={handleEventClick} />
        <Schedule onEventClick={handleEventClick} />
        <Register />
        <Contact />
      </main>

      <Footer />

      <EventModal
        event={selectedEvent}
        onClose={handleClose}
        onNavigate={handleNavigate}
      />
    </>
  );
}

export default App;
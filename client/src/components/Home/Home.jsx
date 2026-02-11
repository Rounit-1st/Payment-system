import "./Home.css";
import HeroSection from "./Hero Section/HeroSection.jsx";
import AboutSection from "./About Us/AboutUs.jsx";
import UpcomingEvents from "./Upcoming Events/UpcomingEvent.jsx";
import Testimonials from "./Testimonials/Testimonial.jsx";
import MeetTheTeam from "./Meet the Team/MeetTheTeam.jsx";


export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <UpcomingEvents />
      <Testimonials />
      <MeetTheTeam />
    </div>
  );
}

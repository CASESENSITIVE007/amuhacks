import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Themes from "./components/Themes";
import HacksTimeline from "./components/HacksTimeline"
import Prize from "./components/Prize";
import Team from "./components/Team";
import Faq from "./components/Faq";
import Footer from "./components/Footer"

export default function Home() {
  return (
  
  <div className="dark bg-black "  >
        <div>
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-100"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="/bg2.mp4" type="video/mp4" />
        </video>

        <Navbar />
        <Hero />
      </div>
    <About/>
    <Themes/>
    <HacksTimeline/>
    <Prize/>
    <Team/>
    <Faq/>
    <Footer/>
  </div>

  );
}

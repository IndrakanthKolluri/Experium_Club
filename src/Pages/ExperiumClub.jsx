import { useState, useEffect } from "react";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import CategorySection from "../Components/CategorySection";
import Stats from "../Components/Stats";
import Footer from "../Components/Footer";
import { heroSlides, categories, stats } from "../Data/Content";

export default function ExperiumClub() {
  const [scrollY, setScrollY] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(
      () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length),
      5000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      <Header />
      <Hero
        slides={heroSlides}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
        scrollY={scrollY}
      />
      <div className=" bg-gray-50">
        {categories.map((c, i) => (
          <CategorySection key={i} category={c} />
        ))}
      </div>
      <Stats stats={stats} />
      <Footer />
    </div>
  );
}

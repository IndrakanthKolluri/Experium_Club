import { ChevronDown, MapPin, TreePine, Star, Users } from "lucide-react";

export default function Hero({ slides, currentSlide, setCurrentSlide, scrollY }) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover scale-105 animate-slow-zoom"
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
          />
          <div className="absolute inset-0 bg-emerald-900/40 mix-blend-multiply z-10" />
        </div>
      ))}

      {/* Hero Content */}
      <div className="relative z-20 text-center max-w-4xl mx-auto px-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
        <h1
          className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg animate-fade-in"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          {slides[currentSlide].title}
        </h1>
        <p className="text-xl md:text-2xl text-emerald-100 mb-6 italic font-medium">
          {slides[currentSlide].subtitle}
        </p>
        <p className="text-lg text-white mb-8 tracking-wide font-semibold">
          One Destination Many Wonders
        </p>

        {/* Quick Stats */}
        <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
          {/* <div className="flex items-center bg-white/90 px-6 py-3 rounded-full shadow-lg border border-gold-400 hover:scale-105 transition">
            <MapPin className="w-4 h-4 mr-2 text-emerald-700" />
            <span className="text-emerald-800 font-semibold">Experium,Road, near Pragathi Resorts, Chilkoor</span>
          </div> */}
          {/* <div className="flex items-center bg-white/90 px-6 py-3 rounded-full shadow-lg border border-gold-400 hover:scale-105 transition">
            <TreePine className="w-4 h-4 mr-2 text-emerald-700" />
            <span className="text-emerald-800 font-semibold">10 Lakh+ Trees</span>
          </div>
          <div className="flex items-center bg-white/90 px-6 py-3 rounded-full shadow-lg border border-gold-400 hover:scale-105 transition">
            <Star className="w-4 h-4 mr-2 text-emerald-700" />
            <span className="text-emerald-800 font-semibold">25K Species</span>
          </div>
          <div className="flex items-center bg-white/90 px-6 py-3 rounded-full shadow-lg border border-gold-400 hover:scale-105 transition">
            <Users className="w-4 h-4 mr-2 text-emerald-700" />
            <span className="text-emerald-800 font-semibold">5000+ Guests</span>
          </div> */}
        </div>
      </div>

      {/* Scroll Down Icon */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-30">
        <ChevronDown className="w-8 h-8 text-gold-400" />
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 right-6 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-150 ${
              index === currentSlide
                ? "bg-gold-400 w-8"
                : "bg-emerald-300 hover:bg-gold-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CategorySection({ category }) {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === category.items.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? category.items.length - 1 : prev - 1
    );
  };

  const renderBotanical = () => (
    <div className="space-y-0">
      {category.items.map((item, i) => (
        <div
          key={i}
          className={`flex flex-col md:flex-row ${
            i % 2 === 1 ? "md:flex-row-reverse" : ""
          } w-full h-[300px] md:h-[380px]`} // Reduced height
          style={{ margin: 0, padding: 0 }}
        >
          {/* Image Side */}
          <div className="md:w-1/2 w-full h-full flex items-center justify-center">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[220px] md:h-[320px] object-cover rounded-2xl shadow-lg" // Reduced image height
              style={{ margin: 0, padding: 0, border: "none" }}
            />
          </div>
          {/* Text Side */}
          <div className="md:w-1/2 w-full h-full flex flex-col justify-center items-center bg-emerald-50">
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-emerald-700 mb-4 text-center">
              {item.name}
            </h3>
            <p className="text-gray-700 text-lg font-medium text-center max-w-xl">
              {item.detail}
            </p>
          </div>
        </div>
      ))}
    </div>
  );

  const renderAdventure = () => (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
    {category.items.map((item, i) => (
      <div
        key={i}
        className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-transform hover:scale-105 duration-500 group"
      >
        {/* Image */}
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-emerald-900/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-center p-4">
          <div>
            <h3 className="text-2xl font-bold text-white">{item.name}</h3>
            <p className="text-sm text-white mt-2">{item.detail}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
);


  const renderLuxury = () => (
    <div className="relative w-full mx-auto">
      {/* Slides */}
      <div className="overflow-hidden rounded-2xl shadow-xl">
        <div
          className="flex transition-transform duration-700"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {category.items.map((item, i) => (
            <div
              key={i}
              className="w-full flex-shrink-0 relative"
              style={{ minWidth: "100%" }}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-96 object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 bg-emerald-900/50 p-6 flex items-center justify-center h-20">
                <span className="text-xl md:text-2xl font-serif font-bold text-white text-center">
                  {item.name}
                </span>
                <span className="mx-3 text-xl md:text-2xl text-white font-medium">-</span>
                <span className="text-xl md:text-2xl text-white font-medium text-center">
                  {item.detail}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 -left-8 transform -translate-y-1/2 bg-white text-emerald-700 p-3 rounded-full shadow-lg hover:bg-yellow-200 hover:text-white transition"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-white text-emerald-700 p-3 rounded-full shadow-lg hover:bg-yellow-200 hover:text-white transition"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );

  const renderEvents = () => (
    <div className="space-y-10">
      {category.items.map((item, i) => (
        <div
          key={i}
          className="relative h-72 rounded-2xl overflow-hidden shadow-lg group"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-emerald-900/60 flex items-center justify-center text-center">
            <div>
              <h3 className="text-3xl font-serif font-bold text-white mb-2">
                {item.name}
              </h3>
              <p className="text-gray-100">{item.detail}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderContent = () => {
    switch (category.id) {
      case "botanical":
        return renderBotanical();
      case "adventure":
        return renderAdventure();
      case "luxury":
        return renderLuxury();
      case "events":
        return renderEvents();
      default:
        return null;
    }
  };

  return (
    <section id={category.id} className="pb-20 bg-emerald-50">
      <div className={`${category.id === "botanical" ? "px-6 pt-20" : "container mx-auto  px-6"}`}>
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-emerald-800">
            {category.title}
          </h2>
          <div className="w-24 h-1 bg-gold-400 mx-auto mt-4" />
        </div>

        {renderContent()}
      </div>
    </section>
  );
}

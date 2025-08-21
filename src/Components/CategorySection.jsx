import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Sparkles, Users, Star, MapPin, Leaf } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: { opacity: 1, scale: 1, y: 0 }
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const sectionDescriptions = {
  botanical: "Step into a lush paradise where nature flourishes. Our botanical gardens feature rare and exotic plants, tranquil walking paths, and immersive green spaces. Whether you seek relaxation or inspiration, this is a sanctuary for every nature lover.",
  adventure: "Unleash your adventurous spirit! From thrilling zip lines and obstacle courses to serene kayaking and hiking trails, our adventure zone offers excitement for all ages. Safety and fun go hand-in-hand as you create unforgettable memories.",
  luxury: "Experience the epitome of luxury and leisure. Indulge in world-class amenities, gourmet dining, spa treatments, and exclusive lounges. Every detail is designed to pamper you and elevate your stay to a new level of comfort.",
  events: "Celebrate life’s special moments in our stunning venues. From grand weddings and corporate retreats to intimate gatherings, our event spaces are equipped with state-of-the-art facilities and breathtaking views.",
  "experience-in-numbers": "Discover why Experium Club is the preferred destination for thousands. Our numbers speak for themselves—years of expertise, countless happy guests, and a legacy of excellence."
};

export default function CategorySection({ category }) {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(null);

  // Swipe support for carousel
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    if (!touchStartX.current) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (diff > 50) prevSlide();
    else if (diff < -50) nextSlide();
    touchStartX.current = null;
  };

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
    <motion.div
      className="space-y-0"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
      transition={{ staggerChildren: 0.2 }}
    >
      <motion.div
        className="mb-8 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <Sparkles className="w-8 h-8 text-emerald-600 mb-2 animate-pulse" />
        <p className="text-lg md:text-xl text-emerald-700 max-w-2xl text-center font-medium">
          {sectionDescriptions.botanical}
        </p>
      </motion.div>
      {category.items.map((item, i) => (
        <motion.div
          key={i}
          className={`flex flex-col md:flex-row ${
            i % 2 === 1 ? "md:flex-row-reverse" : ""
          } w-full h-[300px] md:h-[380px]`}
          variants={cardVariants}
          transition={{ duration: 0.7, delay: i * 0.1 }}
        >
          {/* Image Side */}
          <motion.div
            className="md:w-1/2 w-full h-full flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.img
              src={item.image}
              alt={item.name}
              className="w-full h-[180px] md:h-[320px] object-cover rounded-2xl shadow-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            />
          </motion.div>
          {/* Text Side */}
          <motion.div
            className="md:w-1/2 w-full h-full flex flex-col justify-center items-center bg-emerald-50 px-2 py-4"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-4xl font-serif font-bold text-emerald-700 mb-2 text-center">
              {item.name}
            </h3>
            <p className="text-gray-700 text-base md:text-lg font-medium text-center max-w-xl">
              {item.detail}
            </p>
            <motion.div
              className="mt-4 flex items-center gap-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Leaf className="w-5 h-5 text-emerald-500" />
              <span className="text-emerald-600 font-semibold">Feel the freshness in every breath!</span>
            </motion.div>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );

  const renderAdventure = () => (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
      transition={{ staggerChildren: 0.15 }}
    >
      <motion.div
        className="mb-8 flex flex-col items-center col-span-full"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <Star className="w-8 h-8 text-yellow-400 mb-2 animate-bounce" />
        <p className="text-lg md:text-xl text-emerald-700 max-w-2xl text-center font-medium">
          {sectionDescriptions.adventure}
        </p>
      </motion.div>
      {category.items.map((item, i) => (
        <motion.div
          key={i}
          className="relative overflow-hidden rounded-xl shadow-lg transition-transform duration-500 group"
          variants={cardVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          {/* Image */}
          <motion.img
            src={item.image}
            alt={item.name}
            className="w-full h-56 md:h-64 object-cover transition-transform duration-700"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.05 }}
          />

          {/* Overlay: visible on hover (desktop) or tap (mobile) */}
          <motion.div
            className="absolute inset-0 bg-emerald-900/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-center p-4"
            initial="hidden"
            animate="hidden"
            whileHover="visible"
            whileTap="visible"
            variants={overlayVariants}
            transition={{ duration: 0.4 }}
          >
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white">{item.name}</h3>
              <p className="text-sm text-white mt-2">{item.detail}</p>
              <motion.div
                className="mt-3 flex items-center justify-center gap-2"
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Users className="w-5 h-5 text-white" />
                <span className="text-white font-semibold">Adventure for everyone!</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );

  const renderLuxury = () => (
    <div className="relative w-full mx-auto">
      <motion.div
        className="mb-8 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <Sparkles className="w-8 h-8 text-gold-400 mb-2 animate-spin" />
        <p className="text-lg md:text-xl text-emerald-700 max-w-2xl text-center font-medium">
          {sectionDescriptions.luxury}
        </p>
      </motion.div>
      {/* Slides */}
      <div
        className="overflow-hidden rounded-2xl shadow-xl"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={current}
            className="flex"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="w-full flex-shrink-0 relative"
              style={{ minWidth: "100%" }}
            >
              <motion.img
                src={category.items[current].image}
                alt={category.items[current].name}
                className="w-full h-64 md:h-96 object-cover"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
              />
              <motion.div
                className="absolute bottom-0 inset-x-0 bg-emerald-900/50 p-2 md:p-6 flex flex-col md:flex-row items-center justify-center h-20 md:h-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-xs sm:text-base md:text-2xl font-serif font-bold text-white text-center">
                  {category.items[current].name}
                </span>
                <span className="mx-1 sm:mx-2 text-xs sm:text-base md:text-2xl text-white font-medium">-</span>
                <span className="text-xs sm:text-base md:text-2xl text-white font-medium text-center">
                  {category.items[current].detail}
                </span>
              </motion.div>
              <motion.div
                className="absolute top-4 right-4 bg-white/80 rounded-full px-4 py-2 shadow-lg flex items-center gap-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Sparkles className="w-5 h-5 text-gold-400" />
                <span className="text-emerald-700 font-semibold text-sm">Exclusive Experience</span>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      {/* Arrows */}
      <motion.button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 md:-left-8 transform -translate-y-1/2 bg-white text-emerald-700 p-2 md:p-3 rounded-full shadow-lg hover:bg-yellow-200 hover:text-white transition"
        aria-label="Previous Slide"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      </motion.button>
      <motion.button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 md:-right-8 transform -translate-y-1/2 bg-white text-emerald-700 p-2 md:p-3 rounded-full shadow-lg hover:bg-yellow-200 hover:text-white transition"
        aria-label="Next Slide"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
      </motion.button>
    </div>
  );

  const renderEvents = () => (
    <motion.div
      className="space-y-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
      transition={{ staggerChildren: 0.15 }}
    >
      <motion.div
        className="mb-8 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <MapPin className="w-8 h-8 text-emerald-600 mb-2 animate-bounce" />
        <p className="text-lg md:text-xl text-emerald-700 max-w-2xl text-center font-medium">
          {sectionDescriptions.events}
        </p>
      </motion.div>
      {category.items.map((item, i) => (
        <motion.div
          key={i}
          className="relative h-56 md:h-72 rounded-2xl overflow-hidden shadow-lg group"
          variants={cardVariants}
        >
          <motion.img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover transition-transform duration-700"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 1.03 }}
          />
          {/* Text overlay always visible, animates on hover/tap */}
          <motion.div
            className="absolute inset-0 bg-emerald-900/60 flex items-center justify-center text-center"
            initial={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px #FFD700" }}
            whileTap={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
          >
            <div>
              <h3 className="text-xl md:text-3xl font-serif font-bold text-white mb-2">
                {item.name}
              </h3>
              <p className="text-gray-100">{item.detail}</p>
              <motion.div
                className="mt-3 flex items-center justify-center gap-2"
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Star className="w-5 h-5 text-gold-400" />
                <span className="text-white font-semibold">Make your event unforgettable!</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );

  const renderExperienceInNumbers = () => {
    const stats = [
      { value: "10+", label: "Years of Experience" },
      { value: "500+", label: "Projects Completed" },
      { value: "300+", label: "Satisfied Clients" },
      { value: "5", label: "Awards Won" }
    ];

    return (
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-4 gap-4 px-2 py-8 justify-items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        transition={{ staggerChildren: 0.15 }}
      >
        <motion.div
          className="col-span-2 sm:col-span-4 mb-6 flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Users className="w-8 h-8 text-emerald-600 mb-2 animate-pulse" />
          <p className="text-lg md:text-xl text-emerald-700 max-w-2xl text-center font-medium">
            {sectionDescriptions["experience-in-numbers"]}
          </p>
        </motion.div>
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            className={`flex flex-col items-center bg-white rounded-xl shadow p-4 aspect-square w-full max-w-[140px] sm:max-w-none
              ${i === 2 ? "col-span-2 justify-self-center sm:col-span-1 sm:justify-self-auto" : ""}
            `}
            variants={cardVariants}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="text-lg sm:text-2xl md:text-4xl font-bold text-emerald-700">{stat.value}</span>
            <span className="text-[10px] sm:text-xs md:text-base text-gray-600 mt-1 text-center">{stat.label}</span>
          </motion.div>
        ))}
      </motion.div>
    );
  };

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
      case "experience-in-numbers":
        return renderExperienceInNumbers();
      default:
        return null;
    }
  };

  return (
    <motion.section
      id={category.id}
      className="pb-16 md:pb-20 bg-emerald-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
      transition={{ duration: 0.7 }}
    >
      <motion.div
        className={`${category.id === "botanical" ? "px-2 pt-12 md:px-6 md:pt-20" : "container mx-auto px-2 md:px-6"}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        {/* Section Title */}
        <motion.div
          className="text-center mb-10 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-emerald-800">
            {category.title}
          </h2>
          <motion.div
            className="w-16 md:w-24 h-1 bg-gold-400 mx-auto mt-4"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ originX: 0 }}
          />
        </motion.div>

        {renderContent()}
      </motion.div>
    </motion.section>
  );
}

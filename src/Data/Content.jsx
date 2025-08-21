import {
  Leaf,
  Waves,
  Crown,
  Building,
  TreePine,
  MapPin,
  Star,
  Users,
  Utensils,
} from "lucide-react";
import bg1 from "../assets/bg1.jpg";
import bg2 from "../assets/bg2.jpg";
import bg3 from "../assets/bg3.jpg";
import bg4 from "../assets/bg4.jpg";
import zipline from "../assets/zipline.jpg";
import beach from "../assets/beach.jpg";
import ropecourse from "../assets/ropecourse.jpg";
import luxuryHotel from "../assets/luxury-hotel.jpg";
import cozyCottages from "../assets/cottages.jpg";
import spa from "../assets/salon-spa.jpg";
import pub from "../assets/pubs.jpg";
import german_hangar_dome from "../assets/german-hangar-dome.jpg";
import convention_centres from "../assets/convention-center.jpg";
import banquet_halls from "../assets/banquethall.jpg";
import amphitheatre from "../assets/amphi-theatre.jpg";
import species from "../assets/gardens.jpg";
import gardens from "../assets/gardens.webp";
import sculptures from "../assets/sculptures.jpg";

// 🌟 Hero Section
export const heroSlides = [
  {
    image: bg1,
    title: "Botanical Paradise",
    subtitle: "10 Lakh+ Plants & Trees across 150 Acres",
  },
  {
    image: bg2,
    title: "Adventure Awaits",
    subtitle: "India’s First 4-Way Zipline & 12 Acre Man-Made Beach",
  },
  {
    image: bg3,
    title: "Luxury Living",
    subtitle: "300-Room Hotel, Spa, Salon & Cozy Cottages",
  },
  {
    image: bg4,
    title: "Celebrate in Style",
    subtitle: "German Dome, Amphitheatre & Banquet Halls",
  },
];

// 🌱 Botanical Wonders
export const categories = [
  {
    id: "botanical",
    title: "Botanical Wonders",
    icon: <Leaf className="w-8 h-8" />,
    items: [
      {
        name: "Exotic Species of Plants",
        detail: "25,000+ species of Trees & Plants from 85 countries",
        image: species,      },
      {
        name: "Special Gardens",
        detail: "Japanese, Topiary, Miracle, Palm & Glow",
        image: gardens,      },
      {
        name: "Sculptures",
        detail: "Steel & Stone Masterpieces",
        image: sculptures,      },
    ],
    image:
      "https://images.unsplash.com/photo-1502780402662-acc01917f4eb?auto=format&fit=crop&w=2070&q=80",
  },

  // 🎢 Adventure & Recreation
  {
    id: "adventure",
    title: "Adventure & Recreation",
    icon: <Waves className="w-8 h-8" />,
    items: [
      {
        name: "4-Way Zipline",
        detail: "160ft high panoramic thrill",
        image: zipline      },
      {
        name: "12-Acre Man-Made Beach",
        detail: "Relax by pristine waters",
        image: beach,      },
      {
        name: "Recreation Zones",
        detail: "Rope Course, Rain Dance & Multisport",
        image: ropecourse,      },
    ],
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=2070&q=80",
  },

  // 🏨 Luxury & Leisure
  {
    id: "luxury",
    title: "Luxury & Leisure",
    icon: <Crown className="w-8 h-8" />,
    items: [
      {
        name: "Luxury Hotel",
        detail: "300 Rooms of world-class comfort",
        image: luxuryHotel,      },
      {
        name: "Cozy Cottages",
        detail: "20 private retreats",
        image: cozyCottages,      },
      {
        name: "Spa & Salon",
        detail: "24,000 SqFt of wellness",
        image: spa,      },
      {
        name: "Restaurants & Pub",
        detail: "Unique cuisines & India’s largest pub (30,000 SqFt)",
        image: pub,      },
    ],
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2070&q=80",
  },

  // 🎭 Events & Venues
  {
    id: "events",
    title: "Events & Venues",
    icon: <Building className="w-8 h-8" />,
    items: [
      {
        name: "German Hangar Dome",
        detail: "Architectural wonder for mega events",
        image: german_hangar_dome,      },
      {
        name: "Convention Centres",
        detail: "15,000 & 50,000 SqFt spaces",
        image: convention_centres,      },
      {
        name: "Banquet Halls",
        detail: "3 halls, 5,000 SqFt each",
        image: banquet_halls,      },
      {
        name: "Amphitheatre",
        detail: "1,500 seating open-air performances",
        image: amphitheatre,      },
    ],
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2070&q=80",
  },
];

// 📊 Stats
export const stats = [
  { number: "150", label: "Acres of Wonder", icon: <MapPin className="w-8 h-8" /> },
  { number: "10L+", label: "Plants and Trees", icon: <TreePine className="w-8 h-8" /> },
  { number: "25K+", label: "Exotic Species", icon: <Star className="w-8 h-8" /> },
  { number: "5k+", label: "Event Capacity", icon: <Users className="w-8 h-8" /> },
];

import { MapPin, Youtube, Instagram, Facebook } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="py-12 bg-emerald-800 border-t border-emerald-200">
      <div className="container mx-auto px-6 text-center">
        <div className="flex items-center justify-center space-x-4 mb-6">
          <div>
            <h3 className="text-2xl font-bold text-emerald-50">Experium Club</h3>
            <p className="text-sm text-yellow-300 font-medium tracking-wider">
              One Destination Many Wonders
            </p>
          </div>
        </div>
        <p className="text-emerald-100 mb-4 font-medium">
          A botanical wonderland blending luxury, adventure, and celebration.
        </p>
        <a
          href="https://maps.app.goo.gl/1mBDsWfSG8mhkom1A?g_st=awb"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-yellow-300 hover:text-gold-400 font-semibold mb-4 transition-colors duration-200"
        >
          <MapPin className="w-5 h-5 mr-2 text-yellow-300" />
          Experium, Road, near Pragathi Resorts, Chilkoor, Proddutur, Hyderabad, Telangana 501203
        </a>
        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mt-6 mb-4">
          <a
            href="https://www.youtube.com/@ExperiumClub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-100 hover:text-red-500 text-2xl transition"
          >
            <Youtube className="w-6 h-6" />
          </a>
          <a
            href="https://x.com/ExperiumClub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-100 hover:text-black text-2xl transition"
          >
            <FaXTwitter className="w-6 h-6" />
          </a>
          <a
            href="https://www.instagram.com/experiumclub/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-100 hover:text-pink-500 text-2xl transition"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a
            href="https://www.facebook.com/experiumclub/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-100 hover:text-blue-500 text-2xl transition"
          >
            <Facebook className="w-6 h-6" />
          </a>
        </div>
        <div className="text-sm text-emerald-200">
          © 2025 Experium Club. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

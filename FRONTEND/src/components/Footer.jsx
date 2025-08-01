import { Facebook, Twitter, Instagram, } from "@mui/icons-material";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="py-8 text-xl">
      {/* Divider at the top of the footer */}
      <div className="border-t border-gray-400 mb-8"></div>

      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Legendary <span className="text-green-400">Books</span></h2>
          <p className="text-sm">
            Whoever engages in laborious exercise, except to take a small part in the pleasure that comes from it. 
            They are suffering pain in the pursuit of pleasure.
          </p>
          <div className="flex mt-4 space-x-4">
            <Facebook className="cursor-pointer hover:text-green-400" />
            <Twitter className="cursor-pointer hover:text-green-400" />
            <Instagram className="cursor-pointer hover:text-green-400" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Books</Link></li>
            <li><Link to="/">Pricing</Link></li>
            <li><Link to="/">Authors</Link></li>
            <li><Link to="/">About</Link></li>
            <li><Link to="/">Resources</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/">Order Track</Link></li>
            <li><Link to="/">Contact Us</Link></li>
            <li><Link to="/">Find My Product</Link></li>
            <li><Link to="/">Guide</Link></li>
            <li><Link to="/">FAQ</Link></li>
            <li><Link to="/">FAQ - Happy Return</Link></li>
            <li><Link to="/">Help Desk</Link></li>
            <li><Link to="/">Writer/Publisher Request</Link></li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Policies</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/">Terms of Use</Link></li>
            <li><Link to="/">Privacy Policy</Link></li>
            <li><Link to="/">Happy Return</Link></li>
            <li><Link to="/">Return Policy</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section with Divider */}
      <div className="mt-8 text-center text-sm border-t border-gray-400 pt-4">
        <p>© Copyright 2025 powered by Paras Mahato, Ratan Bist, Arjun Kandel</p>
      </div>
    </footer>
  );
};
export default Footer;

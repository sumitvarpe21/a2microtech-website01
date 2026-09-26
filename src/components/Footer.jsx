import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>A2 Microtech</h3>
          <p>Technology solutions, electronics products and support for modern projects.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <div className="footer-nav">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/services">Services</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <ul>
            <li>
              <Phone size={15} />
              <a href="tel:+919175702325">91757 02325</a>
            </li>
            <li>
              <Mail size={15} />
              <a href="mailto:support@a2microtech.in">support@a2microtech.in</a>
            </li>
            <li>
              <MapPin size={15} />
              <span>Talwade, Pimpri-Chinchwad, Maharashtra - 411062</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2025 A2MICROTECH INDIA PVT. LTD. All rights reserved.</span>
      </div>
    </footer>
  );
}

import { Link, NavLink } from "react-router-dom";
import { Heart, Menu, Search, ShoppingCart, User, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { logo } from "../data/products";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const { cartCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src={logo} alt="A2 Microtech" />
        </Link>

        <nav className="nav-links" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-actions">
          <button type="button" aria-label="Search">
            <Search size={20} />
          </button>
          <button type="button" aria-label="Wishlist">
            <Heart size={20} />
          </button>
          <button type="button" aria-label="Account">
            <User size={20} />
          </button>
          <div className="cart-wrapper">
            <Link to="/cart" className="cart-button" aria-label="Shopping cart">
              <ShoppingCart size={20} />
            </Link>
            <span className="cart-count">{cartCount}</span>
          </div>
          <button
            type="button"
            className="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} onClick={closeMenu}>
              {item.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}

import { ArrowRight, Headphones, ShieldCheck, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../api";
import { homeCategories, logo } from "../data/products";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts({ featured: "true" }).then((data) => setProducts((data.results ?? data).slice(0, 8))).catch(() => setProducts([]));
  }, []);

  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <p className="hero-label">A2MICROTECH INDIA PVT. LTD</p>
          <h1>
            Technology
            <br />
            Built for You.
          </h1>
          <p className="hero-description">
            Explore quality electronic components, technology products and solutions designed for
            modern needs.
          </p>
          <div className="hero-buttons">
            <Link to="/products" className="primary-button">
              Shop Products
              <ArrowRight size={18} />
            </Link>
            <Link to="/products" className="secondary-button">
              Explore Categories
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-logo-box">
            <img src={logo} alt="A2 Microtech" />
          </div>
        </div>
      </section>

      <section className="features">
        <div className="feature">
          <Truck size={28} />
          <div>
            <h3>Fast Delivery</h3>
            <p>Reliable delivery across India</p>
          </div>
        </div>
        <div className="feature">
          <ShieldCheck size={28} />
          <div>
            <h3>Quality Products</h3>
            <p>Products you can rely on</p>
          </div>
        </div>
        <div className="feature">
          <Headphones size={28} />
          <div>
            <h3>Customer Support</h3>
            <p>We're here when you need us</p>
          </div>
        </div>
      </section>

      <section className="categories-section">
        <div className="section-heading">
          <div>
            <p>EXPLORE</p>
            <h2>Shop by Category</h2>
          </div>
          <Link to="/products">
            View All <ArrowRight size={17} />
          </Link>
        </div>

        <div className="category-grid">
          {homeCategories.map((category) => (
            <Link
              key={category.name}
              to={`/products?category=${encodeURIComponent(category.name)}`}
              className="category-card"
            >
              <div className="category-image">
                <img src={category.image} alt={category.name} />
              </div>
              <h3>{category.name}</h3>
            </Link>
          ))}
        </div>
      </section>

      <section className="products-section">
        <div className="section-heading">
          <div>
            <p>OUR COLLECTION</p>
            <h2>Featured Products</h2>
          </div>
          <Link to="/products">
            View All <ArrowRight size={17} />
          </Link>
        </div>
        <div className="product-grid">
          {products.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}

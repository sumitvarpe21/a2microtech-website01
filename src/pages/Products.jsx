import { Search, SlidersHorizontal } from "lucide-react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../api";
import { categoryFilters } from "../data/products";

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const [maxPrice, setMaxPrice] = useState(2000);
  const [sort, setSort] = useState("featured");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const activeCategory = searchParams.get("category") || "All Products";

  useEffect(() => {
    const timer = setTimeout(async () => {
      try {
        setLoading(true);
        setError("");
        const data = await getProducts({
          search,
          category: activeCategory === "All Products" ? "" : activeCategory,
          max_price: maxPrice,
          ordering: sort === "low-high" ? "price" : sort === "high-low" ? "-price" : "id",
        });
        setProducts(data.results ?? data);
      } catch (err) {
        setError("Unable to load products. Make sure the Django backend is running.");
      } finally {
        setLoading(false);
      }
    }, 250);
    return () => clearTimeout(timer);
  }, [search, activeCategory, maxPrice, sort]);

  const handleCategoryChange = (name) => {
    const nextParams = new URLSearchParams(searchParams);
    if (name === "All Products") nextParams.delete("category");
    else nextParams.set("category", name);
    setSearchParams(nextParams);
  };

  return (
    <main className="products-page">
      <section className="products-header">
        <p>OUR STORE</p>
        <h1>{activeCategory === "All Products" ? "Electronic Components" : activeCategory}</h1>
        <p className="products-description">
          Explore electronic components, development boards, sensors, modules and accessories.
        </p>
      </section>

      <section className="products-controls">
        <div className="search-box">
          <Search size={19} />
          <input type="text" placeholder="Search products..." value={search} onChange={(event) => setSearch(event.target.value)} />
        </div>
        <button className="filter-button" type="button"><SlidersHorizontal size={18} />Filters</button>
        <select className="sort-select" value={sort} onChange={(event) => setSort(event.target.value)}>
          <option value="featured">Sort: Featured</option>
          <option value="low-high">Price: Low to High</option>
          <option value="high-low">Price: High to Low</option>
        </select>
      </section>

      <section className="products-content">
        <aside className="product-sidebar">
          <h3>Categories</h3>
          {categoryFilters.map((name) => (
            <button key={name} type="button" className={activeCategory === name ? "active-category" : ""} onClick={() => handleCategoryChange(name)}>
              {name}
            </button>
          ))}
          <div className="price-filter">
            <h3>Price</h3>
            <input type="range" min="0" max="2000" step="50" value={maxPrice} onChange={(event) => setMaxPrice(Number(event.target.value))} />
            <div className="price-values"><span>₹0</span><span>₹{maxPrice}</span></div>
          </div>
        </aside>

        <div className="catalog-grid">
          {loading ? <div className="no-products"><h3>Loading products...</h3></div> : error ? <div className="no-products"><h3>Products unavailable</h3><p>{error}</p></div> : products.length > 0 ? products.map((product) => <ProductCard key={product.id} product={product} />) : <div className="no-products"><h3>No products found</h3><p>Try changing your search or filters.</p></div>}
        </div>
      </section>
    </main>
  );
}

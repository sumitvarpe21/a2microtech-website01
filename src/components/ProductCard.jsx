import { Link } from "react-router-dom";
import { Heart, ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <Link to={`/products/${product.id}`} className="product-card-link">
        <div className="product-image-wrapper">
          <div className="product-image">
            {product.image ? <img src={product.image} alt={product.name} /> : <span>Product Image</span>}
          </div>
        </div>
        <div className="product-info">
          <p className="product-category">{product.category}</p>
          <h3>{product.name}</h3>
          <div className="product-bottom">
            <strong>₹{product.price}</strong>
            <span className="view-product">View Product</span>
          </div>
        </div>
      </Link>

      <button
        className="wishlist-button"
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
        }}
        aria-label="Add to wishlist"
      >
        <Heart size={18} />
      </button>

      <button className="add-cart-button" onClick={() => addToCart(product, 1)}>
        <ShoppingCart size={17} />
        Add
      </button>
    </div>
  );
}

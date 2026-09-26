import { ArrowLeft, Lock } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Checkout() {
  const { cartItems, cartTotal } = useCart();
  // const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  if (cartItems.length === 0) {
    return (
      <main className="checkout-page">
        <div className="empty-checkout">
          <h1>Your Cart is Empty</h1>
          <p>Add some products before proceeding to checkout.</p>
          <Link to="/products" className="continue-shopping">
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }
  const handleWhatsAppOrder = (event) => {
  event.preventDefault();

  const whatsappNumber = "919112413712"; // Replace with your A2 Microtech WhatsApp number

  const orderItems = cartItems
    .map(
      (item) =>
        `• ${item.name}\n  Qty: ${item.quantity} × ₹${item.price} = ₹${
          item.price * item.quantity
        }`,
    )
    .join("\n\n");

  const customerName = `${form.firstName} ${form.lastName}`.trim();

  const message = `Hello A2 Microtech, I would like to place an order.

*Order Details*
------------------------
${orderItems}
------------------------
*Total: ₹${cartTotal}*

*Customer Details*
Name: ${customerName}
Phone: ${form.phone}
Email: ${form.email}

*Delivery Address*
${form.address}
${form.city}, ${form.state}
PIN: ${form.pincode}

*Payment Method*
Cash on Delivery

Please confirm my order.`;

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message,
  )}`;

  window.location.href = whatsappUrl;
};
  return (
    <main className="checkout-page">
      <div className="checkout-header">
        <Link to="/cart" className="back-to-cart">
          <ArrowLeft size={17} />
          Back to Cart
        </Link>
        <p>CHECKOUT</p>
        <h1>Complete Your Order</h1>
      </div>

      <form onSubmit={handleWhatsAppOrder} className="checkout-layout">
        <div className="checkout-form">
          <section className="checkout-section">
            <h2>Contact Information</h2>
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>
          </section>

          <section className="checkout-section">
            <h2>Shipping Address</h2>
            <div className="form-row">
              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label>Address</label>
              <textarea
                name="address"
                placeholder="House number, street, area"
                value={form.address}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-row three-columns">
              <div className="form-group">
                <label>City</label>
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={form.city}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>State</label>
                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  value={form.state}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>PIN Code</label>
                <input
                  type="text"
                  name="pincode"
                  placeholder="PIN code"
                  value={form.pincode}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </section>

          <section className="checkout-section">
            <h2>Payment Method</h2>
            <div className="payment-option">
              <input type="radio" id="cod" name="payment" value="cod" defaultChecked />
              <label htmlFor="cod">
                <strong>Cash on Delivery</strong>
                <span>Pay when your order arrives.</span>
              </label>
            </div>
            <div className="payment-option disabled-payment">
              <input type="radio" id="online" name="payment" value="online" disabled />
              <label htmlFor="online">
                <strong>Online Payment</strong>
                <span>Available soon.</span>
              </label>
            </div>
          </section>

          <button type="submit" className="place-order-button">
            Place Order on WhatsApp
          </button>
        </div>

        <aside className="checkout-summary">
          <h2>Order Summary</h2>
          <div className="checkout-products">
            {cartItems.map((item) => (
              <div className="checkout-product" key={item.id}>
                <div className="checkout-product-image">
                  <span>IMG</span>
                </div>
                <div>
                  <h3>{item.name}</h3>
                  <p>Qty: {item.quantity}</p>
                </div>
                <strong>₹{item.price * item.quantity}</strong>
              </div>
            ))}
          </div>
          <div className="checkout-summary-line">
            <span>Subtotal</span>
            <strong>₹{cartTotal}</strong>
          </div>
          <div className="checkout-summary-line">
            <span>Shipping</span>
            <span>Calculated later</span>
          </div>
          <div className="checkout-total">
            <span>Total</span>
            <strong>₹{cartTotal}</strong>
          </div>
          <div className="secure-checkout">
            <Lock size={16} />
            <span>Secure checkout</span>
          </div>
        </aside>
      </form>
    </main>
  );
}

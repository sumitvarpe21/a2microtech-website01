# A2 Microtech Website

A React + Vite storefront for A2 Microtech with the same content, categories, product catalog, cart flow, and responsive styling as the original application.

## Run locally

### 1. Install dependencies

```sh
npm install
```

### 2. Start the development server

```sh
npm run dev
```

### 3. Build for production

```sh
npm run build
```

The production build is generated in the `dist` folder for static hosting.

## Project structure

- `src/App.jsx` — application router and layout
- `src/pages/` — Home, Products, Product Details, Cart, Checkout, Order Success, Services, About, Contact
- `src/components/` — Navbar, ProductCard, Footer
- `src/data/products.js` — product catalog
- `src/context/CartContext.jsx` — cart state with localStorage persistence
- `public/assets/` — product, category, and logo images

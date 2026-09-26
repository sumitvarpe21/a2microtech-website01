const API_BASE_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/api";
const ASSET_BASE_URL = import.meta.env.BASE_URL || "/";

function normalizeProduct(product) {
  if (!product) return product;
  return {
    ...product,
    image: product.image
      ? product.image.startsWith("http") || product.image.startsWith("/")
        ? product.image
        : `${ASSET_BASE_URL}assets/${product.image}`
      : "",
  };
}

export async function getProducts(params = {}) {
  const searchParams = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") searchParams.set(key, value);
  });

  const query = searchParams.toString();
  const response = await fetch(`${API_BASE_URL}/products/${query ? `?${query}` : ""}`);
  if (!response.ok) throw new Error(`Products request failed (${response.status})`);
  const data = await response.json();
  return Array.isArray(data) ? data.map(normalizeProduct) : { ...data, results: data.results.map(normalizeProduct) };
}

export async function getProduct(id) {
  const response = await fetch(`${API_BASE_URL}/products/${id}/`);
  if (!response.ok) {
    if (response.status === 404) return null;
    throw new Error(`Product request failed (${response.status})`);
  }
  return normalizeProduct(await response.json());
}

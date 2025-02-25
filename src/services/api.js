import { API_BASE_URL, ENDPOINTS } from "./api-config"

// Helper function for API calls
const fetchApi = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message || "API Error")
    }

    return await response.json()
  } catch (error) {
    console.error("API Error:", error)
    throw error
  }
}

export const productService = {
  getAllProducts: (params = {}) => {
    const queryString = new URLSearchParams(params).toString()
    return fetchApi(`${ENDPOINTS.PRODUCTS}?${queryString}`)
  },
  getProductById: (id) => fetchApi(`${ENDPOINTS.PRODUCTS}/${id}`),
  searchProducts: (query) => fetchApi(`${ENDPOINTS.PRODUCTS}/search?q=${query}`),
}

export const categoryService = {
  getAllCategories: () => fetchApi(ENDPOINTS.CATEGORIES),
  getCategoryById: (id) => fetchApi(`${ENDPOINTS.CATEGORIES}/${id}`),
}

export const authService = {
  login: (credentials) =>
    fetchApi(`${ENDPOINTS.AUTH}/login`, {
      method: "POST",
      body: JSON.stringify(credentials),
    }),
  register: (userData) =>
    fetchApi(`${ENDPOINTS.AUTH}/register`, {
      method: "POST",
      body: JSON.stringify(userData),
    }),
}

export const cartService = {
  getCart: () => fetchApi(ENDPOINTS.CART),
  addToCart: (productId, quantity) =>
    fetchApi(`${ENDPOINTS.CART}/add`, {
      method: "POST",
      body: JSON.stringify({ productId, quantity }),
    }),
  updateCartItem: (itemId, quantity) =>
    fetchApi(`${ENDPOINTS.CART}/update`, {
      method: "PATCH",
      body: JSON.stringify({ itemId, quantity }),
    }),
  removeFromCart: (itemId) =>
    fetchApi(`${ENDPOINTS.CART}/remove/${itemId}`, {
      method: "DELETE",
    }),
}


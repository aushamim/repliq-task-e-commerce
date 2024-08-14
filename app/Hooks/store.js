import axios from "axios";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useProductsStore = create((set) => ({
  products: [],
  loading: false,
  error: null,
  fetchProducts: async () => {
    set({ loading: true, error: null });

    try {
      const response = await axios.get(
        "https://raw.githubusercontent.com/aushamim/repliq-task-e-commerce/main/products.json"
      );
      set({ products: response.data.reverse(), loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
}));
useProductsStore.getState().fetchProducts();

export const useCartStore = create(
  persist(
    (set) => ({
      cart: [],
      addToCart: (product) => {
        set((state) => {
          const cartItem = state.cart.find(
            (item) => item.product.id === product.id
          );
          if (cartItem) {
            return {
              cart: state.cart.map((item) =>
                item.product.id === product.id
                  ? { ...item, count: item.count + 1 }
                  : item
              ),
            };
          } else {
            return { cart: [...state.cart, { product, count: 1 }] };
          }
        });
      },
      removeFromCart: (id) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.product.id !== id),
        })),
      increaseQuantity: (id) => {
        set((state) => {
          return {
            cart: state.cart.map((item) =>
              item.product.id === id ? { ...item, count: item.count + 1 } : item
            ),
          };
        });
      },
      decreaseQuantity: (id) => {
        set((state) => {
          return {
            cart: state.cart.map((item) =>
              item.product.id === id ? { ...item, count: item.count - 1 } : item
            ),
          };
        });
      },
    }),
    { name: "cart" }
  )
);

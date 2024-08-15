import axios from "axios";
import toast from "react-hot-toast";
import { create } from "zustand";
import { persist } from "zustand/middleware";

// User Simulation
export const useUserStore = create(
  persist(
    (set) => ({
      users: [
        {
          name: "Amzud Uddin Shamim",
          email: "amzud.uddin@gmail.com",
          address: "Mohammadpur, Dhaka",
          phone: "1866353438",
          password: "aabb12345",
        },
      ],
      loggedInUser: null,

      register: (user) => {
        set((state) => {
          const existingUser = state.users.find((x) => x.phone === user.phone);
          if (existingUser) {
            toast.error("User already exists. Please login");
            return { users: state.users };
          } else {
            toast.success("User created successfully");
            window.location.href = "/";
            return { users: [...state.users, user], loggedInUser: user };
          }
        });
      },

      login: (user) => {
        set((state) => {
          const existingUser = state.users.find((x) => x.phone === user.phone);
          if (existingUser) {
            if (existingUser.password === user.password) {
              toast.success("Logged In successfully");
              window.location.href = "/";
              return { loggedInUser: user };
            } else {
              toast.error("Wrong password");
              return { loggedInUser: null };
            }
          } else {
            toast.error("User not found");
            return { loggedInUser: null };
          }
        });
      },

      logout: () => {
        toast.success("Logged out successfully");
        set({ loggedInUser: null });
      },
    }),
    { name: "user-data" }
  )
);

// Products
export const useProductsStore = create((set) => ({
  products: [],
  loading: true,
  error: null,

  fetchProducts: async () => {
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

// Cart
export const useCartStore = create(
  persist(
    (set) => ({
      cart: [],
      totalPrice: 0,

      addToCart: (product) => {
        set((state) => {
          toast.success(`${product.name} added to cart.`);
          const cartItem = state.cart.find(
            (item) => item.product.id === product.id
          );
          if (cartItem) {
            return {
              cart: state.cart.map((item) =>
                item.product.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          } else {
            return { cart: [...state.cart, { product, quantity: 1 }] };
          }
        });

        set((state) => ({
          totalPrice:
            state.totalPrice +
            (product.price - (product.price * product.discount) / 100),
        }));
      },

      removeFromCart: (cart_item) => {
        set((state) => ({
          totalPrice:
            state.totalPrice -
            (cart_item.product.price -
              (cart_item.product.price * cart_item.product.discount) / 100) *
              cart_item.quantity,
        }));

        set((state) => {
          toast.success("Successfully removed from cart.");
          return {
            cart: state.cart.filter(
              (item) => item.product.id !== cart_item.product.id
            ),
          };
        });
      },

      increaseQuantity: (product) => {
        set((state) => {
          return {
            cart: state.cart.map((item) =>
              item.product.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          };
        });

        set((state) => ({
          totalPrice:
            state.totalPrice +
            (product.price - (product.price * product.discount) / 100),
        }));
      },

      decreaseQuantity: (product) => {
        set((state) => {
          return {
            cart: state.cart.map((item) =>
              item.product.id === product.id
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          };
        });

        set((state) => ({
          totalPrice:
            state.totalPrice -
            (product.price - (product.price * product.discount) / 100),
        }));
      },

      clearCart: () => {
        set({ cart: [], totalPrice: 0 });
      },
    }),
    { name: "cart" }
  )
);

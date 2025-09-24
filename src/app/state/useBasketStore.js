import { create } from "zustand";

export const useBasketStore = create((set, get) => ({
  basket: [],

 
  addToBasket: (productToAdd) =>
    set((state) => {
      const existingItem = state.basket.find(item => item.id === productToAdd.id);

      if (existingItem) {
        return {
          basket: state.basket.map(item =>
            item.id === productToAdd.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
       
        return {
          basket: [...state.basket, { ...productToAdd, quantity: 1 }],
        };
      }
    }),

 
  removeFromBasket: (id) =>
    set((state) => ({
      basket: state.basket.filter((item) => item.id !== id),
    })),

 
  clearBasket: () => set({ basket: [] }),

  
  increaseQuantity: (id) =>
    set((state) => ({
      basket: state.basket.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      ),
    })),

 
  decreaseQuantity: (id) =>
    set((state) => ({
      basket: state.basket.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item 
      ),
    })),

 
  getTotal: () => {
    const state = get(); 
    return state.basket.reduce(
      (acc, item) => acc + parseInt(item.price) * item.quantity,
      0
    );
  },

  
  getTotalItems: () => {
    const state = get();
    return state.basket.reduce((acc, item) => acc + item.quantity, 0);
  },
}));
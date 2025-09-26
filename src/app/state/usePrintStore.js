import { create } from 'zustand';

const usePrintStore = create((set) => ({
    quantity: 0,
    price: 0,
    cart: [],
    dopItems: [],

    setPrintOptions: ({ quantity, price }) => set({ quantity, price }),

    addItemToCart: (id) => set((state) => ({
        cart: [...state.cart, { id: Date.now(), imgId: id, count: 1 }]
    })),

    removeItemFromCart: (id) => set((state) => ({
        cart: state.cart.filter(item => item.id !== id)
    })),

    addDopItem: (item) => set((state) => ({
        dopItems: [...state.dopItems, { ...item, uniqueId: Date.now() }]
    })),

   
    removeDopItem: (uniqueId) => set((state) => ({
        dopItems: state.dopItems.filter(item => item.uniqueId !== uniqueId)
    })),

    clearCart: () => set({ cart: [] })
}));

export default usePrintStore;
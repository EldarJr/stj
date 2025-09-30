import { create } from 'zustand';

const usePrintStore = create((set) => ({
    quantity: 0, // Количество макарон в наборе
    price: 0, // Цена за набор макарон
    cart: [], // Слот для печати (изображения)
    dopItems: [], // Дополнительные товары

    setPrintOptions: ({ quantity, price }) => set({ quantity, price }),

    addItemToCart: (id) => set((state) => ({
        cart: [...state.cart, { id: Date.now(), imgId: id, count: 1, name: `Слот печати #${state.cart.length + 1}` }]
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

    clearCart: () => set({ cart: [] }),

    // --- Очистка состояния ---
    clearPrintStore: () => set({
        quantity: 0,
        price: 0,
        cart: [],
        dopItems: []
    })
}));

export default usePrintStore;
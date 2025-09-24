import { create } from 'zustand';

export const useMnkStore = create((set, get) => ({
    selectedKit: {
        name: '',
        totalQuantity: 0,
        price: 0,
    },
    cart: [],
    dop: [],

    setSelectedKit: (kit) => {
        set({ selectedKit: kit, cart: [], dop: [] });
    },

    getTotalPrice: () => {
        const { selectedKit, cart, dop } = get();
        let total = selectedKit.price;
        total += cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

        total += dop.reduce((sum, item) => sum + item.price * item.quantity, 0);

        return total;
    },


    addMacaronToCart: (macaronItem) => {
        set((state) => {
            const existingItem = state.cart.find(item => item.id === macaronItem.id);
            if (existingItem) {
                return {
                    cart: state.cart.map(item =>
                        item.id === macaronItem.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                };
            } else {
                return {
                    cart: [...state.cart, { ...macaronItem, quantity: 1 }],
                };
            }
        });
    },


    removeMacaronFromCart: (macaronId) => {
        set((state) => ({
            cart: state.cart.reduce((newCart, item) => {
                if (item.id === macaronId) {
                    if (item.quantity > 1) {
                        newCart.push({ ...item, quantity: item.quantity - 1 });
                    }
                } else {
                    newCart.push(item);
                }
                return newCart;
            }, []),
        }));
    },


    deleteMacaronFromCart: (macaronId) => {
        set((state) => ({
            cart: state.cart.filter(item => item.id !== macaronId),
        }));
    },


    getTotalSelected: () => {
        const { cart } = get();
        return cart.reduce((total, item) => total + item.quantity, 0);
    },


    addDopMacaron: (macaronItem) => {
        set((state) => {
            const existingItem = state.dop.find(item => item.id === macaronItem.id);
            if (existingItem) {
                return {
                    dop: state.dop.map(item =>
                        item.id === macaronItem.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                };
            } else {
                return {
                    dop: [...state.dop, { ...macaronItem, quantity: 1 }],
                };
            }
        });
    },

    removeDopMacaron: (macaronId) => {
        set((state) => ({
            dop: state.dop.reduce((newDop, item) => {
                if (item.id === macaronId) {
                    if (item.quantity > 1) {
                        newDop.push({ ...item, quantity: item.quantity - 1 });
                    }
                } else {
                    newDop.push(item);
                }
                return newDop;
            }, []),
        }));
    },

    deleteDopMacaron: (macaronId) => {
        set((state) => ({
            dop: state.dop.filter(item => item.id !== macaronId),
        }));
    },
}));
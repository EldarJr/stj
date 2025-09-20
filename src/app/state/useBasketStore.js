import { create } from "zustand";

export const useBasketStore = create((set, get) => ({
  basket: [],

  // Добавить товар или увеличить его количество
  addToBasket: (productToAdd) =>
    set((state) => {
      const existingItem = state.basket.find(item => item.id === productToAdd.id);

      if (existingItem) {
        // Если товар уже в корзине, увеличиваем его количество
        return {
          basket: state.basket.map(item =>
            item.id === productToAdd.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        // Если товара нет, добавляем его с количеством 1
        return {
          basket: [...state.basket, { ...productToAdd, quantity: 1 }],
        };
      }
    }),

  // Удалить товар полностью из корзины (по ID)
  // Это будет использоваться для кнопки "удалить" (крестик)
  removeFromBasket: (id) =>
    set((state) => ({
      basket: state.basket.filter((item) => item.id !== id),
    })),

  // Очистить корзину
  clearBasket: () => set({ basket: [] }),

  // Увеличить количество товара по ID
  increaseQuantity: (id) =>
    set((state) => ({
      basket: state.basket.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      ),
    })),

  // Уменьшить количество товара по ID
  decreaseQuantity: (id) =>
    set((state) => ({
      basket: state.basket.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item // Количество не может быть меньше 1
      ),
    })),

  // Получить общую сумму корзины
  getTotal: () => {
    const state = get(); // Используем get() для доступа к актуальному состоянию
    return state.basket.reduce(
      (acc, item) => acc + parseInt(item.price) * item.quantity,
      0
    );
  },

  // Получить общее количество товаров в корзине
  getTotalItems: () => {
    const state = get();
    return state.basket.reduce((acc, item) => acc + item.quantity, 0);
  },
}));
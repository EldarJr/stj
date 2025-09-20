import { create } from "zustand";

export const useNewsStore = create((set) => ({
  selectedNews: null,
  setSelectedNews: (news) => set({ selectedNews: news }),

  selectedProduct: null,
  setSelectedProduct: (product) => set({ selectedProduct: product }),
}));

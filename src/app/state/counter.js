import { create } from "zustand";

export const useCounterStore = create((set) => ({
  counters: {},

  increase: (id) =>
    set((state) => ({
      counters: {
        ...state.counters,
        [id]: (state.counters[id] || 1) + 1,
      },
    })),

  decrease: (id) =>
    set((state) => ({
      counters: {
        ...state.counters,
        [id]: Math.max((state.counters[id] || 1) - 1, 1),
      },
    })),
}));

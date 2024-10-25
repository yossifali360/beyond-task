import { create } from "zustand";

const useStore = create((set) => ({
    navBarOpened: false,
    setNavBarOpened: (value) => set(() => ({ navBarOpened: value })),
    filters: {},
    editFilters: (filterName, value) => {
        set((store) => ({
            filters: { ...store.filters, [filterName]: value },
        }));
    },
}));

export default useStore;

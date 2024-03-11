import { create } from 'zustand';

interface GlobalState {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
}

const useGlobalStore = create<GlobalState>((set) => ({
  searchQuery: '',
  setSearchQuery: (value: string) => set({ searchQuery: value })
}));

export default useGlobalStore;

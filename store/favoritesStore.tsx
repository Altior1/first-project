import { create } from 'zustand';

interface FavoritesState {
    favorites_ids: number[];
    toogleFavorite: (id: number) => void;
}

export const userFavoritesStore = create<FavoritesState>((set) => ({
    favorites_ids: [],
    toogleFavorite: (id: number) => set((state) => {
        const isFavorite = state.favorites_ids.includes(id);
        if (isFavorite) {
            return {favorites_ids: state.favorites_ids.filter((favId) => favId !== id)};
        } else {
            return {favorites_ids: [...state.favorites_ids, id]};
        }
    })
}));
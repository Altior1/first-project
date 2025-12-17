import { useMovies } from '@/hooks/use-movies';
import { userFavoritesStore } from '@/store/favoritesStore';
import { useShallow } from 'zustand/react/shallow';
import { Button, Text, View } from 'react-native';

export default function Movies() {
  const data = useMovies();
  const { favorites_ids: userFavorites, toogleFavorite } = userFavoritesStore(
    useShallow((state) => ({ favorites_ids: state.favorites_ids, toogleFavorite: state.toogleFavorite }))
  );

  return (
    <View style={{ flex: 1, padding: 20 }}>
        {data && data.movies && data.movies.length > 0 ? (
            data.movies.map((movie: { id: number; title: string; description: string }, index: number) => (
                <View key={movie.id} style={{ marginBottom: 10 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: "blue" }}>{movie.title}</Text>
                    <Text>{movie.description}</Text>
                    <Button
                        title={userFavorites.includes(movie.id) ? "Remove from Favorites" : "Add to Favorites"}
                        onPress={() => toogleFavorite(movie.id)}
                    />
                </View>
            ))
        ) : (
            <Text style={{ color: "red" }}>No movies available.</Text>
        )}
    </View>
);
}
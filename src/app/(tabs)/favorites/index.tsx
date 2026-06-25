import { useMemo } from "react";
import { useRouter } from "expo-router";
import { FlatList, Text, View } from "react-native";
import CharacterCard from "@/components/CharacterCard";
import ErrorFooter from "@/components/ErrorFooter";
import ErrorState from "@/components/ErrorState";
import LoadingFooter from "@/components/LoadingFooter";
import LoadingState from "@/components/LoadingState";
import { useFavoritesStore } from "@/store/useFavoritesStore";
import { styles } from "./styles";
import { useFavoritesController } from "./useFavoritesController";

export default function FavoritesScreen() {
  const router = useRouter();
  const { characters, ids, loading, error, statusCode, refetch } = useFavoritesController();
  const toggle = useFavoritesStore((s) => s.toggle);

  const listFooter = useMemo(() => {
    if (loading) return <LoadingFooter />;
    if (error && characters.length > 0) return <ErrorFooter statusCode={statusCode} onRetry={refetch} />;
    return null;
  }, [loading, error, characters.length, statusCode, refetch]);

  if (error && !characters.length) return <ErrorState statusCode={statusCode} onRetry={refetch} />;

  if (loading && !characters.length) return <LoadingState />;

  if (ids.length === 0) {
    return (
      <View style={styles.empty}>
        <Text style={styles.emptyText}>No favorites yet</Text>
        <Text style={styles.emptySub}>Tap the heart on a character to add it here</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={characters}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <CharacterCard
          character={item}
          isFavorite
          onPress={() => router.push(`/character/${item.id}`)}
          onToggleFavorite={() => toggle(item.id)}
        />
      )}
      numColumns={2}
      columnWrapperStyle={{ gap: 8 }}
      style={styles.listContainer}
      contentContainerStyle={styles.list}
      accessibilityLabel="Favorites list"
      accessibilityRole="list"
      ListFooterComponent={listFooter}
    />
  );
}

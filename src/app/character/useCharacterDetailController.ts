import { useLocalSearchParams } from "expo-router";
import { useCharacter } from "../../hooks/useCharacter";
import { useFavoritesStore } from "../../store/useFavoritesStore";

export function useCharacterDetailController() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { has, toggle } = useFavoritesStore();

  const { data, loading, error, statusCode, refetch } = useCharacter(id!);

  return {
    character: data?.character ?? null,
    loading,
    error,
    statusCode,
    refetch,
    isFavorite: has(id!),
    toggleFavorite: () => toggle(id!),
  };
}

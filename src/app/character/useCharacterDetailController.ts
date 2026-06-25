import { useLocalSearchParams } from "expo-router";
import { useCharacter } from "@/hooks/useCharacter";
import { extractStatusCode } from "@/utils/error";
import { useFavoritesStore } from "@/store/useFavoritesStore";

export function useCharacterDetailController() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { has, toggle } = useFavoritesStore();

  const { data, loading, error: apolloError, refetch } =
    useCharacter(id!);

  const error = apolloError ?? undefined;
  const statusCode = extractStatusCode(apolloError);

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

import { useFavorites } from "../../../hooks/useFavorites";
import { useFavoritesStore } from "../../../store/useFavoritesStore";

export function useFavoritesController() {
  const ids = useFavoritesStore((s) => s.ids);
  const { data, loading, error, statusCode, refetch } = useFavorites(ids);

  return {
    characters: data?.charactersByIds ?? [],
    ids,
    loading,
    error,
    statusCode,
    refetch,
  };
}
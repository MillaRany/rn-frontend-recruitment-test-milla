import { extractStatusCode } from "@/utils/error";
import { useFavorites } from "@/hooks/useFavorites";
import { useFavoritesStore } from "@/store/useFavoritesStore";

export function useFavoritesController() {
  const ids = useFavoritesStore((s) => s.ids);
  const { data, loading, error: apolloError, refetch } = useFavorites(ids);
  const error = apolloError ?? undefined;
  const statusCode = extractStatusCode(apolloError);

  return {
    characters: data?.charactersByIds ?? [],
    ids,
    loading,
    error,
    statusCode,
    refetch,
  };
}
import { useMemo } from "react";
import { useFavorites } from "@/hooks/useFavorites";
import { useCharacters } from "@/hooks/useCharacters";
import { useFavoritesStore } from "@/store/useFavoritesStore";
import { extractStatusCode } from "@/utils/error";

export function useStatsController() {
  const ids = useFavoritesStore((s) => s.ids);
  const {
    data: favData,
    loading: favLoading,
    error: favError,
    refetch: favRefetch,
  } = useFavorites(ids);
  const {
    data: allData,
    error: allError,
  } = useCharacters(1);

  const loading = favLoading;
  const error = favError ? (favError ?? undefined) : undefined;
  const statusCode = extractStatusCode(favError);
  const refetch = favRefetch;

  const favorites = favData?.charactersByIds ?? [];
  const totalAll = allData?.characters.info.count ?? 0;

  const stats = useMemo(() => {
    if (!favorites.length) return null;

    const statusCount = {
      Alive: favorites.filter((c) => c.status === "Alive").length,
      Dead: favorites.filter((c) => c.status === "Dead").length,
      unknown: favorites.filter((c) => c.status === "unknown").length,
    };

    const speciesCount = favorites.reduce<Record<string, number>>((acc, c) => {
      acc[c.species] = (acc[c.species] || 0) + 1;
      return acc;
    }, {});

    const sortedSpecies = Object.entries(speciesCount)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5);

    return {
      totalFavorites: ids.length,
      totalAll,
      statusCount,
      topSpecies: sortedSpecies,
    };
  }, [favorites, ids.length, totalAll]);

  return {
    stats,
    loading,
    error,
    statusCode,
    refetch,
    hasFavorites: ids.length > 0,
  };
}

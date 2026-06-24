import { useMemo } from "react";
import { useCharacters } from "../../../hooks/useCharacters";

export function useStatsController() {
  const { data, loading, error, statusCode, refetch } = useCharacters(1);

  const stats = useMemo(() => {
    if (!data?.characters) return null;

    const results = data.characters.results;
    const info = data.characters.info;

    const statusCount = {
      Alive: results.filter((c) => c.status === "Alive").length,
      Dead: results.filter((c) => c.status === "Dead").length,
      unknown: results.filter((c) => c.status === "unknown").length,
    };

    const speciesCount = results.reduce<Record<string, number>>((acc, c) => {
      acc[c.species] = (acc[c.species] || 0) + 1;
      return acc;
    }, {});

    const sortedSpecies = Object.entries(speciesCount)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5);

    return {
      totalCharacters: info.count,
      totalPages: info.pages,
      statusCount,
      topSpecies: sortedSpecies,
    };
  }, [data]);

  return {
    stats,
    loading,
    error,
    statusCode,
    refetch,
  };
}

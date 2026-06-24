import { useState, useCallback } from "react";
import { ApolloError } from "@apollo/client";
import { useRouter } from "expo-router";
import { useCharacters } from "../../../hooks/useCharacters";
import type { CharactersFilter } from "../../../types/character";

export type StatusFilter = "All" | "Alive" | "Dead" | "unknown";

export function useCharactersController() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<StatusFilter>("All");
  const [paginateError, setPaginateError] = useState<ApolloError | null>(null);

  const filter: CharactersFilter = {
    ...(search ? { name: search } : {}),
    ...(status !== "All" ? { status } : {}),
  };

  const { data, loading, error, statusCode, networkStatus, fetchMore, refetch } =
    useCharacters(1, filter);

  const characters = data?.characters.results ?? [];
  const info = data?.characters.info;
  const paginating = loading && characters.length > 0;

  const handleLoadMore = useCallback(() => {
    if (info?.next && networkStatus !== 3) {
      setPaginateError(null);
      fetchMore({ variables: { page: info.next, filter } }).catch((err: ApolloError) =>
        setPaginateError(err),
      );
    }
  }, [info?.next, networkStatus, fetchMore, filter]);

  const handleSearch = useCallback((text: string) => {
    setSearch(text);
    setPaginateError(null);
  }, []);

  const handleStatusChange = useCallback((newStatus: StatusFilter) => {
    setStatus(newStatus);
    setPaginateError(null);
  }, []);

  const handleCharacterPress = useCallback(
    (id: string) => {
      router.push(`/character/${id}`);
    },
    [router],
  );

  return {
    characters,
    info,
    loading,
    paginating,
    error,
    paginateError,
    statusCode,
    networkStatus,
    search,
    status,
    handleLoadMore,
    handleSearch,
    handleStatusChange,
    handleCharacterPress,
    refetch,
  };
}

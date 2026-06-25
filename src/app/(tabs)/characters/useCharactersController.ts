import { useState, useCallback } from "react";
import { ApolloError } from "@apollo/client";
import { useRouter } from "expo-router";
import { useCharacters } from "@/hooks/useCharacters";
import { extractStatusCode } from "@/utils/error";
import type { CharactersFilter, StatusFilter } from "@/types/character";

export function useCharactersController() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<StatusFilter>("All");
  const [paginateError, setPaginateError] = useState<ApolloError | null>(null);

  const filter: CharactersFilter = {
    ...(search ? { name: search } : {}),
    ...(status !== "All" ? { status } : {}),
  };

  const { data, loading, error: apolloError, networkStatus, fetchMore, refetch } =
    useCharacters(1, filter);

  const error = apolloError ?? undefined;
  const statusCode = extractStatusCode(apolloError);

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

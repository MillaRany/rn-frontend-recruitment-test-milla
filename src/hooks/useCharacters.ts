import { ApolloError, useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "@/api/queries";
import type { CharactersData, CharactersVars, CharactersFilter } from "@/types/character";

export function useCharacters(page: number, filter?: CharactersFilter) {
  const { data, loading, error, fetchMore, networkStatus, refetch } = useQuery<
    CharactersData,
    CharactersVars
  >(GET_CHARACTERS, {
    variables: { page, filter },
    notifyOnNetworkStatusChange: true,
  });

  const statusCode = ((error as ApolloError | undefined)?.networkError as any)?.statusCode ?? null;

  return {
    data,
    loading,
    error,
    statusCode,
    networkStatus,
    fetchMore,
    refetch,
  };
}

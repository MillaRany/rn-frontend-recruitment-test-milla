import { ApolloError, useQuery } from "@apollo/client";
import { GET_CHARACTERS_BY_IDS } from "../api/queries";
import type { CharactersByIdsData, CharactersByIdsVars } from "../types/character";

export function useFavorites(ids: string[]) {
  const { data, loading, error, refetch } = useQuery<CharactersByIdsData, CharactersByIdsVars>(
    GET_CHARACTERS_BY_IDS,
    { variables: { ids }, skip: ids.length === 0 },
  );

  const statusCode = ((error as ApolloError | undefined)?.networkError as any)?.statusCode ?? null;

  return { data, loading, error, statusCode, refetch };
}

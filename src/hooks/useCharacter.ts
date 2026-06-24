import { ApolloError, useQuery } from "@apollo/client";
import { GET_CHARACTER } from "@/api/queries";
import type { CharacterData, CharacterVars } from "@/types/character";

export function useCharacter(id: string) {
  const { data, loading, error, refetch } = useQuery<CharacterData, CharacterVars>(
    GET_CHARACTER,
    { variables: { id } },
  );

  const statusCode = ((error as ApolloError | undefined)?.networkError as any)?.statusCode ?? null;

  return {
    data,
    loading,
    error,
    statusCode,
    refetch,
  };
}

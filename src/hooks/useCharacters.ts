import { GET_CHARACTERS } from '@/api/queries';
import type { CharactersData, CharactersVars } from '@/types/character';
import { useQuery } from '@apollo/client';

export function useCharacters(page: number, filter?: { name?: string; status?: string }) {
const { data, loading, error, fetchMore } = useQuery<CharactersData, CharactersVars>(GET_CHARACTERS, {
    variables: { page, filter },
    notifyOnNetworkStatusChange: true,
  });

  return {
    data,
    loading,
    error,
    fetchMore,
  }
 
}
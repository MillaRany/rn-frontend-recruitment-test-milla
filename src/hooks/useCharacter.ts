import { GET_CHARACTER } from '@/api/queries';
import type { CharacterData, CharacterVars } from '@/types/character';
import { useQuery } from '@apollo/client';

export function useCharacter(id: string) {
  const { data, loading, error } = useQuery<CharacterData, CharacterVars>(GET_CHARACTER, {
    variables: { id },
  });

  return {
    data,
    loading,
    error,
  };
}

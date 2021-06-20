import { useQuery } from 'react-query';
import { getPokemon } from '@/utils/api-utils';

export const useGetPokemon = () => {
  const { data, isLoading } = useQuery(['pokemon'], getPokemon);

  return { data, isLoading };
};

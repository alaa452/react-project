import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../api/axiosInstance';

export default function useCategories() {
  async function getCategories() {
    const response = await axiosInstance.get('/Categories');
    return response.data;
  }

  return useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
    staleTime: 1000 * 60 * 5,
  });
}

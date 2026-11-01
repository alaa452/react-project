import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../api/axiosInstance';

export default function useProducts() {
  async function getProducts() {
    const response = await axiosInstance.get('/Products');
    return response.data;
  }

  return useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
    staleTime: 1000 * 60 * 5,
  });
}

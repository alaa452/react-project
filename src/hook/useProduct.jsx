import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../api/axiosInstance';

export default function useProduct(id) {
  async function getProduct() {
    const response = await axiosInstance.get(`/Products/${id}`);
    return response.data;
  }

  return useQuery({
    queryKey: ['product', id],
    queryFn: getProduct,
    enabled: Boolean(id),
    staleTime: 1000 * 60 * 5,
  });
}

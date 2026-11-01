import { Link, useParams } from 'react-router-dom';
import useProduct from '../../hook/useProduct';
import ProductDetailsItem from '../../component/products/ProductDetailsItem';

export default function ProductDetails() {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useProduct(id);

  if (isLoading) return <p>Loading product details...</p>;
  if (isError) return <p role="alert">Product details error: {error.message}</p>;

  const product = data?.response;
  if (!product) return <p>Product not found.</p>;

  return (
    <section>
      <Link to="/">Back to products</Link>
      <ProductDetailsItem product={product} />
    </section>
  );
}

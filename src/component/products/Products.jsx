import useProducts from '../../hook/useProducts';
import ProductItem from './ProductItem';

export default function Products() {
  const { data, isLoading, isError, error } = useProducts();

  if (isLoading) return <p>Loading products...</p>;
  if (isError) return <p role="alert">Products error: {error.message}</p>;

  const products = data?.response?.data ?? [];

  return (
    <section>
      <h2>Products</h2>
      {products.length === 0 ? <p>No products found.</p> : (
        <ul className="products-list">
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </ul>
      )}
    </section>
  );
}

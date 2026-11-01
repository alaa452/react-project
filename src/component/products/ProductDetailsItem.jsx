export default function ProductDetailsItem({ product }) {
  return (
    <article className="product-detail">
      <h1>{product.name}</h1>
      {product.image && <img src={product.image} alt={product.name ?? 'Product'} />}
      <p>{product.description}</p>
      {product.price != null && <p>Price: {product.price}$</p>}
    </article>
  );
}

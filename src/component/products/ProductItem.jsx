import { Link } from 'react-router-dom';

export default function ProductItem({ product }) {
  return (
    <li className="product-item">
      <Link to={`/products/${product.id}`}>
        {product.image && <img src={product.image} alt={product.name ?? 'Product'} />}
        <h3>{product.name}</h3>
        <p>{product.price}$</p>
        <span>View details</span>
      </Link>
    </li>
  );
}

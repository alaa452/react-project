import useCategories from '../../hook/useCategories';
import CategoryItem from './CategoryItem';

export default function Categories() {
  const { data, isLoading, isError, error } = useCategories();

  if (isLoading) return <p>Loading categories...</p>;
  if (isError) return <p role="alert">Categories error: {error.message}</p>;

  const categories = data?.response?.data ?? [];

  return (
    <section>
      <h2>Categories</h2>
      {categories.length === 0 ? <p>No categories found.</p> : (
        <ul className="categories-list">
          {categories.map((category) => (
            <CategoryItem key={category.id} category={category} />
          ))}
        </ul>
      )}
    </section>
  );
}

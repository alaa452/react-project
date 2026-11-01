import { readFileSync, existsSync } from 'node:fs';
import assert from 'node:assert/strict';

const read = (p) => readFileSync(new URL(`../${p}`, import.meta.url), 'utf8');
const hooks = [
  ['src/hook/useCategories.jsx', "axiosInstance.get('/Categories')"],
  ['src/hook/useProducts.jsx', "axiosInstance.get('/Products')"],
  ['src/hook/useProduct.jsx', 'axiosInstance.get(`/Products/${id}`)'],
];
for (const [file, endpoint] of hooks) {
  assert.ok(read(file).includes('useQuery('), `Missing React Query hook: ${file}`);
  assert.ok(read(file).includes(endpoint), `Unexpected endpoint: ${file}`);
  console.log(`PASS: ${file}`);
}
for (const file of [
  'src/component/categories/CategoryItem.jsx',
  'src/component/products/ProductItem.jsx',
  'src/component/products/ProductDetailsItem.jsx',
]) {
  assert.ok(existsSync(new URL(`../${file}`, import.meta.url)), `Missing item component ${file}`);
  console.log(`PASS: ${file}`);
}
assert.ok(read('src/App.jsx').includes('QueryClientProvider'), 'Missing React Query provider');
assert.equal(JSON.parse(read('package.json')).name, 'react-project');
assert.ok(read('render.yaml').includes('name: react-project'));
console.log('PASS: react-project Part 1 structural checks');

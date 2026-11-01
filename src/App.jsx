import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Categories from './component/categories/Categories';
import Products from './component/products/Products';
import ProductDetails from './pages/products/ProductDetails';
import './style.css';

const queryClient = new QueryClient();
const apiBaseUrl = import.meta.env.VITE_BURL?.trim() ?? '';
const apiConfigured = /^https?:\/\//.test(apiBaseUrl) && !apiBaseUrl.includes('REPLACE_WITH');

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <main>
          <h1>React Project — Part 1</h1>
          {apiConfigured ? (
            <Routes>
              <Route path="/" element={<><Categories /><Products /></>} />
              <Route path="/products/:id" element={<ProductDetails />} />
            </Routes>
          ) : (
            <p role="alert">API base URL is not configured. Set VITE_BURL in .env or in Render environment settings, then rebuild.</p>
          )}
        </main>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

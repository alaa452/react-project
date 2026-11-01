import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Categories from './component/categories/Categories';
import Products from './component/products/Products';
import './style.css';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <main><h1>Knowledge Shop — Part 1</h1><Categories /><Products /></main>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

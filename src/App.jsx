import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Categories from './component/categories/Categories';
import './style.css';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <main><h1>Knowledge Shop — Part 1</h1><Categories /></main>
    </QueryClientProvider>
  );
}

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './style.css';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <main><h1>Knowledge Shop — Part 1</h1></main>
    </QueryClientProvider>
  );
}

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HomePage from "./pages/homePage";

export default function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <HomePage />
    </QueryClientProvider>
  );
}

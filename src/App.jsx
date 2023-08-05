import { useQuery } from "@tanstack/react-query"
import getData from "./hooks/useGetMessages";
import HomePage from "./pages/homePage";

export default function App() {

  const {isLoading, data, error} = useQuery({
    queryFn: getData,
    queryKey: ["messages"],
  })

  if(isLoading) return "Loading...";

  return (
    <HomePage />
  )
}

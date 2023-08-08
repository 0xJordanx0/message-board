import { useQuery } from "@tanstack/react-query";
import getMessages from "../hooks/getMessages";

export default function Messages() {
  const {isLoading, data, error} = useQuery({
    queryFn: getMessages,
    queryKey: ["messages"],
  })

  if(isLoading) return "Loading...";
  return (
    <ul role="list" className="divide-y divide-gray-100">
      {data.map((message) => (
        <li key={message.id} className="flex gap-x-4 py-5">
          <img
            className="h-12 w-12 flex-none rounded-full bg-gray-50"
            src="/user.png"
            alt=""
          />
          <div className="flex-auto">
            <div className="flex items-baseline justify-between gap-x-4">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                Anonymous
              </p>
              <p className="flex-none text-xs text-gray-600">
                <time dateTime={message.created_at}>{message.created_at}</time>
              </p>
            </div>
            <p className="mt-1 line-clamp-2 text-sm leading-6 text-gray-600">
              {message.message}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}

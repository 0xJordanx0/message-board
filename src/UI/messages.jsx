import { useQuery, useQueryClient } from "@tanstack/react-query";
import getMessages from "../hooks/getMessages";
import moment  from "moment";

import {
  FaceFrownIcon,
  FaceSmileIcon as FaceSmileIconMini,
  FireIcon,
  HandThumbUpIcon,
  HeartIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";

const moods = [
  {
    name: "Excited",
    value: "excited",
    icon: <FireIcon />,
    iconColor: "text-white",
    bgColor: "bg-red-500",
  },
  {
    name: "Loved",
    value: "loved",
    icon: <HeartIcon />,
    iconColor: "text-white",
    bgColor: "bg-pink-400",
  },
  {
    name: "Happy",
    value: "happy",
    icon: <FaceSmileIconMini />,
    iconColor: "text-white",
    bgColor: "bg-green-400",
  },
  {
    name: "Sad",
    value: "sad",
    icon: <FaceFrownIcon />,
    iconColor: "text-white",
    bgColor: "bg-yellow-400",
  },
  {
    name: "Thumbsy",
    value: "thumbsy",
    icon: <HandThumbUpIcon />,
    iconColor: "text-white",
    bgColor: "bg-blue-500",
  },
  {
    name: "I feel nothing",
    value: null,
    icon: <XMarkIcon />,
    iconColor: "text-gray-400",
    bgColor: "bg-transparent",
  },
];

export default function Messages() {
  const { isLoading, data, error } = useQuery({
    queryFn: getMessages,
    queryKey: ["messages"],
  });

  function getMood(mood) {
    let selectedMood = moods.find(
      (filteredMood) => filteredMood.value === mood
    );
    return selectedMood;
  }

  if (isLoading) return "Loading...";
  
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
                <time dateTime={message.created_at}>{moment(message.created_at).fromNow()}</time>
              </p>
            </div>
            <p className="mt-1 line-clamp-2 text-sm leading-6 text-gray-600 flex justify-between">
              <span>{message.message}</span>
                <span className={`${getMood(message.mood).bgColor} flex h-8 w-8 items-center justify-center rounded-full`}>
                  <span
                    className={`h-5 w-5 flex-shrink-0 ${getMood(message.mood).iconColor}`}
                    aria-hidden="true"
                  >
                    {getMood(message.mood).icon}
                  </span>
                </span>
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}

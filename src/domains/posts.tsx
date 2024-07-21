"use client";

import { getComments } from "@/services/commnets";
import { getPosts } from "@/services/posts";
import { useQuery } from "@tanstack/react-query";

export function Posts() {
  // This useQuery could just as well happen in some deeper
  // child to <Posts>, data will be available immediately either way
  const { data } = useQuery({
    queryKey: ["posts"],
    queryFn: () => getPosts(),
  });

  // This query was not prefetched on the server and will not start
  // fetching until on the client, both patterns are fine to mix.
  const { data: commentsData } = useQuery({
    queryKey: ["posts-comments"],
    queryFn: getComments,
  });

  return <div>{data?.body}</div>;
}

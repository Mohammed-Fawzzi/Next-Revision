"use client";
import { useState } from "react";
import { postsType } from "@/types/types";

export default function usePosts() {
  const [posts, setPosts] = useState<postsType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchPosts = async () => {
    try {
      setIsLoading(true);
      const data = await fetch(`https://jsonplaceholder.typicode.com/posts`);
      if (!data.ok) {
        throw new Error("Failed to fetch posts");
      }
      const response: postsType[] = await data.json();
      setPosts(response);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error("Error fetching posts:", error);
    }
  };

  return { fetchPosts, posts, isLoading };
}

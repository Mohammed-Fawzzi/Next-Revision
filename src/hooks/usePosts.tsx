"use client";
import { useState } from "react";
import { postsType } from "@/types/types";

export default function usePosts() {
  const [posts, setPosts] = useState<postsType[]>([]);

  const fetchPosts = async () => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const response: postsType[] = await data.json();
    setPosts(response);
  };

  return { fetchPosts, posts };
}

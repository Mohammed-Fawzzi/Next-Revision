"use client";
import Posts from "@/components/Posts/Posts";
import usePosts from "@/hooks/usePosts";
import { useEffect } from "react";

export default function Home() {
  const { fetchPosts, posts } = usePosts();

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <section className="p-5 md:p-10 bg-gray-100">
        <h1 className="text-4xl font-bold text-center mt-5 text-gray-800">
          Welcome to Next Revision
        </h1>

        <p className="text-center mt-4 text-lg text-gray-600">
          This is the home page of our Next.js project.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 mb-5">
          {posts.slice(0, 12).map((post, index) => (
            <Posts post={post} key={post.id} index={index} />
          ))}
        </div>
      </section>
    </>
  );
}
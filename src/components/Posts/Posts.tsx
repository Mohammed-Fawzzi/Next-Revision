import { postsType } from "@/types/types";
import Link from "next/link";

export default function Posts({ post, index }: { post: postsType; index: number }) {
    return (
        <div
            className="p-5 bg-white rounded-xl shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl opacity-0 animate-fadeIn flex flex-col"
            style={{ animationDelay: `${index * 0.05}s`, animationFillMode: "forwards" }}
        >
            <div className="mb-4">
                <h2 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
                    {post.title}
                </h2>

                <p className="text-gray-600 text-sm line-clamp-3">
                    {post.body}
                </p>
            </div>

            <Link
                href={`/${post.id}`}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition mt-auto flex items-center justify-center"
            >
                Post Details
            </Link>
        </div>
    )
}

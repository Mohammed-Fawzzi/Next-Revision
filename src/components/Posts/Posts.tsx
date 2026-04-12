import { postsType } from "@/types/types";
import Link from "next/link";

export default function Posts({ post, index }: { post: postsType; index: number }) {
    return (
        <div className="max-w-2xl w-full bg-white rounded-2xl shadow-lg p-6 transition-all duration-300 hover:shadow-2xl flex flex-col"
            style={{ animationDelay: `${index * 0.05}s`, animationFillMode: "forwards" }}
        >
            <div className="mb-4">
                <h2 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
                    {post.title}
                </h2>

                <div className="h-0.5 w-full bg-gray-200"></div>

                <p className="text-gray-600 text-sm line-clamp-3 mt-2">
                    {post.body}
                </p>
            </div>

            <button
                // href={`/${post.id}`}
                onClick={() => alert("Soon!")}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition mt-auto flex items-center justify-center"
            >
                Post Details
            </button>
        </div>
    )
}

import { postsType } from "@/types/types";

export default function Posts({ post, index }: { post: postsType; index: number }) {
    return (
        <div
            className="p-5 bg-white rounded-xl shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl opacity-0 animate-fadeIn"
            style={{ animationDelay: `${index * 0.05}s`, animationFillMode: "forwards" }}
        >
            <h2 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
                {post.title}
            </h2>

            <p className="text-gray-600 text-sm line-clamp-3">
                {post.body}
            </p>
        </div>
    )
}

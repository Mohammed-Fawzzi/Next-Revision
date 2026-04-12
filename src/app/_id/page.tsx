'use client';

import { useParams, useRouter } from "next/navigation";
import usePosts from "@/hooks/usePosts";
import { useEffect } from "react";
import { BiArrowBack } from "react-icons/bi";
import Loader from "@/components/Loader/Loader";

export default function PostDetails() {
    const params = useParams();
    const router = useRouter();
    const id = Number(params?.id);

    const { fetchPostDetails, postsDetails, isLoading } = usePosts();

    useEffect(() => {
        if (id) {
            fetchPostDetails(id);
        }
    }, [id]);

    if (isLoading) {
        return <Loader />
    }

    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="max-w-2xl w-full bg-white rounded-2xl shadow-lg p-6 transition-all duration-300 hover:shadow-2xl">

                {/* Back Button */}
                <button
                    onClick={() => router.back()}
                    className="mb-4 flex items-center gap-2 text-sm text-gray-500 hover:text-gray-800 transition"
                >
                    <BiArrowBack /> Back
                </button>

                {postsDetails && (
                    <div className="flex flex-col gap-4">

                        {/* Title */}
                        <h2 className="text-2xl font-bold text-gray-800 leading-snug">
                            {postsDetails.title}
                        </h2>

                        {/* Divider */}
                        <div className="h-0.5 w-full bg-gray-200"></div>

                        {/* Body */}
                        <p className="text-gray-600 leading-relaxed text-lg">
                            {postsDetails.body}
                        </p>

                        {/* Footer */}
                        <div className="flex justify-between items-center mt-4 text-sm text-gray-400">
                            <span>Post ID: {postsDetails.id}</span>
                            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
                                Article
                            </span>
                        </div>

                    </div>
                )}
            </div>
        </div>
    );
}
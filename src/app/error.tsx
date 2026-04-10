"use client";

export default function error({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-5">
            <h1 className="text-4xl font-bold text-red-600 mb-4">
                Something went wrong
            </h1>

            <p className="text-gray-600 mb-6 max-w-md">
                {error.message || "An unexpected error occurred."}
            </p>

            <button
                onClick={() => reset()}
                className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
            >
                Try Again
            </button>
        </div>
    );
}
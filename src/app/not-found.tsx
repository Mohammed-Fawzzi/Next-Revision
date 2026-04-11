// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">

            {/* 404 */}
            <h1 className="text-7xl font-bold text-sky-500 mb-4">404</h1>

            {/* Title */}
            <h2 className="text-2xl font-semibold mb-2">
                Page Not Found
            </h2>

            {/* Description */}
            <p className="text-gray-500 mb-6 max-w-md">
                Sorry, the page you are looking for doesn't exist or has been moved.
            </p>

            {/* Back Home */}
            <Link
                href="/"
                className="px-6 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition"
            >
                Go Back Home
            </Link>
        </div>
    );
}
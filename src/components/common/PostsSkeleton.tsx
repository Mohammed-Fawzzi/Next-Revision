export default function PostsSkeleton() {
    return (
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col animate-pulse w-sm">

            {/* Title */}
            <div className="h-5 bg-gray-300 rounded w-3/4 mb-3"></div>
            <div className="h-5 bg-gray-300 rounded w-1/2 mb-4"></div>

            {/* Divider */}
            <div className="h-0.5 w-full bg-gray-200 mb-3"></div>

            {/* Body */}
            <div className="space-y-2 mb-4">
                <div className="h-3 bg-gray-300 rounded w-full"></div>
                <div className="h-3 bg-gray-300 rounded w-5/6"></div>
                <div className="h-3 bg-gray-300 rounded w-4/6"></div>
            </div>

            {/* Button */}
            <div className="h-10 bg-gray-300 rounded-lg mt-auto"></div>
        </div>
    );
}
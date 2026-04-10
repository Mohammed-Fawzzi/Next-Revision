import React from "react";

export default function Loader() {
  return (
    <div className="flex items-center justify-center h-full py-10">
      <div className="w-10 h-10 border-4 border-gray-300 border-t-gray-800 rounded-full animate-spin"></div>
    </div>
  );
}

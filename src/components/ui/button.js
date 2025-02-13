import React from "react";

export function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-6 py-3 text-lg bg-white text-purple-700 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition"
    >
      {children}
    </button>
  );
}

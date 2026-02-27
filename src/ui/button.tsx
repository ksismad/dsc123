import React from "react";

export function Button({ variant = "default", ...props }) {
  return (
    <button
      className={`px-4 py-2 rounded ${
        variant === "outline"
          ? "border border-gray-500 text-gray-800"
          : "bg-blue-600 text-white hover:bg-blue-800"
      }`}
      {...props}
    />
  );
}
import React from "react";

export function Input({ value, onChange, ...props }) {
  return (
    <input
      type="text"
      className="border px-3 py-2 w-full rounded"
      value={value}
      onChange={onChange}
      {...props}
    />
  );
}
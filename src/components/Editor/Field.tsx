"use client";
import type { ChangeEvent } from "react";

type FieldProps = {
  label: string;
  value?: string;
  onChange: (value: string) => void;
  type?: "text" | "color" | "datetime-local" | "url";
  multiline?: boolean;
};
export default function Field({
  label,
  value = "",
  onChange,
  type = "text",
  multiline = false,
}: FieldProps) {
  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => onChange(event.target.value);
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-medium text-slate-600">
        {label}
      </span>
      {multiline ? (
        <textarea
          value={value}
          onChange={handleChange}
          rows={3}
          className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-[#b7410E] focus:ring-2 focus:ring-[#b7410E]/20"
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={handleChange}
          className={`${type === "color" ? "h-10 p-1" : "px-3 py-2"} w-full rounded-md border border-slate-300 text-sm outline-none focus:border-[#b7410E] focus:ring-2 focus:ring-[#b7410E]/20`}
        />
      )}
    </label>
  );
}

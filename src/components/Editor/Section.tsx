import type { ReactNode } from "react";
export default function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <details open className="rounded-xl border border-slate-200 bg-white">
      <summary className="cursor-pointer px-4 py-3 text-sm font-semibold text-slate-800">
        {title}
      </summary>
      <div className="grid gap-3 border-t border-slate-100 p-4">{children}</div>
    </details>
  );
}

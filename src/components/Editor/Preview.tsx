"use client";
import { SuperModernInvitation } from "@/app/InvitationTemplates/SuperModern";
import type { SuperModernInvitationProps } from "@/app/InvitationTemplates/SuperModern";
export default function Preview({
  invitation,
}: {
  invitation: SuperModernInvitationProps;
}) {
  return (
    <aside className="min-w-0">
      <div className="sticky top-5 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
        <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
          <div>
            <p className="text-sm font-semibold text-slate-900">
              Vista en tiempo real
            </p>
            <p className="text-xs text-slate-500">Modo de previsualización</p>
          </div>
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
        </div>
        <div className="h-[calc(100vh-7.5rem)] overflow-y-auto bg-slate-200 p-4">
          <div className="mx-auto overflow-hidden rounded-xl bg-white shadow-lg">
            <SuperModernInvitation {...invitation} previewMode />
          </div>
        </div>
      </div>
    </aside>
  );
}

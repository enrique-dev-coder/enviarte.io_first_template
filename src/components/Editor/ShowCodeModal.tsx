"use client";
export default function ShowCodeModal({
  code,
  onClose,
}: {
  code: string;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center bg-slate-950/60 p-4">
      <div className="flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
          <div>
            <h2 className="font-semibold text-slate-900">
              Props para una nueva invitación
            </h2>
            <p className="text-sm text-slate-500">
              Copia este bloque en una nueva página de boda.
            </p>
          </div>
          <button
            onClick={onClose}
            className="rounded-md px-3 py-1 text-slate-500 hover:bg-slate-100"
          >
            Cerrar
          </button>
        </div>
        <pre className="m-0 flex-1 overflow-auto bg-slate-950 p-5 text-xs leading-5 text-emerald-200">
          <code>{code}</code>
        </pre>
        <div className="flex justify-end gap-3 border-t border-slate-200 px-5 py-4">
          <button
            onClick={() => navigator.clipboard.writeText(code)}
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Copiar código
          </button>
          <button
            onClick={onClose}
            className="rounded-lg bg-[#b7410E] px-4 py-2 text-sm font-semibold text-white"
          >
            Listo
          </button>
        </div>
      </div>
    </div>
  );
}

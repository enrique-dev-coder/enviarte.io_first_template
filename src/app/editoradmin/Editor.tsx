"use client";

import { useMemo, useState } from "react";
import type { SuperModernInvitationProps } from "@/app/InvitationTemplates/SuperModern";
import Preview from "@/components/Editor/Preview";
import ShowCodeModal from "@/components/Editor/ShowCodeModal";
import CreadorEditor from "@/components/Editor/CreadorEditor";
import { DEFAULT_INVITATION } from "@/components/Editor/constants";

export default function Editor() {
  const [invitation, setInvitation] =
    useState<SuperModernInvitationProps>(DEFAULT_INVITATION);
  const [showCode, setShowCode] = useState(false);

  const code = useMemo(() => {
    const { previewMode: _previewMode, ...props } = invitation;
    return `import { SuperModernInvitation } from "@/app/InvitationTemplates/SuperModern";\nimport type { SuperModernInvitationProps } from "@/app/InvitationTemplates/SuperModern";\n\nconst invitation: SuperModernInvitationProps = ${JSON.stringify(props, null, 2)};\n\nexport default function NuevaInvitacion() {\n  return <SuperModernInvitation {...invitation} />;\n}`;
  }, [invitation]);

  return (
    <div className="min-h-screen bg-slate-100 p-4 lg:p-7">
      <div className="mx-auto grid max-w-[1600px] gap-6 lg:grid-cols-[minmax(360px,0.9fr)_minmax(420px,1.1fr)]">
        <CreadorEditor
          onSave={() => setShowCode(true)}
          invitation={invitation}
          setInvitation={setInvitation}
        ></CreadorEditor>
        <Preview invitation={invitation} />
      </div>
      {showCode && (
        <ShowCodeModal code={code} onClose={() => setShowCode(false)} />
      )}
    </div>
  );
}

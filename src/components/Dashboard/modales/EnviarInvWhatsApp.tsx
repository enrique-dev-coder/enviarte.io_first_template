import React from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/UI/Dialog";
import WhatsAppIcon from "/public/assets/images/icons8-whatsapp.svg";
// TODO: aqui con la app de digybot cuando se envie ese numero guardar en un modelo de invitaciones enviadas
const EnviarInvWhatsApp = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <button className="shadow-sm rounded-md h-[110px] bg-green-200 flex flex-col items-center justify-center  text-black gap-1 p-2">
            <Image src={WhatsAppIcon} width={48} alt="usa nuestro whatsapp" />
            <p className=" font-medium">
              Enviar con un solo click usando nuestro whatsapp
            </p>
          </button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EnviarInvWhatsApp;

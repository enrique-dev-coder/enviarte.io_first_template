"use client";

import React from "react";
import { PlusCircleIcon } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/UI/Dialog";

import AgregarMesaForm from "./AgregarMesaForm";

const ModalAgregarMesa = ({ invitacionId }: { invitacionId: string }) => {
  return (
    <Dialog>
      <DialogTrigger>
        <button className=" bg-purple-900 text-white flex rounded-full p-2 hover:bg-purple-950 gap-2 transition-all ease-linear">
          <PlusCircleIcon />
          Agregar Mesa
        </button>
      </DialogTrigger>
      <DialogContent className="bg-white  top-[20%]">
        <DialogHeader>
          <DialogTitle>
            <p>Selecciona los invitados y escribe un nombre para la mesa</p>
          </DialogTitle>
          <DialogDescription>
            <AgregarMesaForm invitacionId={invitacionId} />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ModalAgregarMesa;

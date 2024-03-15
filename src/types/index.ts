export type Invitado = {
  name: string;
  tel: string;
  pasesAsignados: number;
  pasesConfirmados: number;
};

export type InvitadoParaLink = {
  name: string;
  tel?: string;
  pasesAsignados: number;
};

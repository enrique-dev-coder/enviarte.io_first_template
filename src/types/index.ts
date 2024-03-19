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

export interface TypesForSendingWhatsAppInvite {
  nombre: string;
  tel: string;
  invitacionId: string;
  whatsMessage: string;
}

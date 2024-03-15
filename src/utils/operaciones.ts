import { Invitado, InvitadoParaLink } from "@/types";

export function sumarPasesConfirmados(invitados: Array<Invitado>) {
  // Utilizamos reduce para sumar los pases confirmados
  return invitados.reduce(function (total, invitado) {
    // Sumamos el valor de pasesConfirmados de cada objeto al total
    return total + invitado.pasesConfirmados;
  }, 0); // Inicializamos el total en 0
}

export function objetoAParametrosURL(objeto: any) {
  const parametrosURL = new URLSearchParams();

  for (const clave in objeto) {
    if (objeto.hasOwnProperty(clave)) {
      parametrosURL.append(clave, objeto[clave]);
    }
  }

  return parametrosURL.toString();
}

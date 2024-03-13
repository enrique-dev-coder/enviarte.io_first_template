import { Invitado } from "@/types";

export function sumarPasesConfirmados(invitados: Array<Invitado>) {
  // Utilizamos reduce para sumar los pases confirmados
  return invitados.reduce(function (total, invitado) {
    // Sumamos el valor de pasesConfirmados de cada objeto al total
    return total + invitado.pasesConfirmados;
  }, 0); // Inicializamos el total en 0
}

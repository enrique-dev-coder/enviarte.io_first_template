export const calcularTiempoRestante = (
  fechaEvento: any
): { dias: number; horas: number; minutos: number; segundos: number } => {
  const ahora = new Date().getTime();
  const tiempoRestante = fechaEvento - ahora;
  const dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
  const horas = Math.floor(
    (tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);
  return { dias, horas, minutos, segundos };
};

// Suma un año a la fecha actual para obtener la fecha de expiración de cookie
const currentDate = new Date();
export const expirationDate = new Date(
  currentDate.getFullYear() + 1,
  currentDate.getMonth(),
  currentDate.getDate()
);

/** Conserva la transparencia al aplicar un color CSS configurable sobre una imagen. */
export const withOpacity = (color: string, opacity: number) =>
  `color-mix(in srgb, ${color} ${opacity}%, transparent)`;

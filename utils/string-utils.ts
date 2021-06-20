export const capitalize = (string: string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

export const padded = (number: number) => ('000' + number).slice(-3);

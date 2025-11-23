export const findById = <T extends { id: string | number }>(
  arr: T[],
  id: string | number
) => {
  return arr.find((item) => item.id === id);
};

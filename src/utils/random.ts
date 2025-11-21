export function getRandomIntInclusive(min: number, max: number) {
  const minRounded = Math.ceil(min);
  const maxRounded = Math.floor(max);
  return (
    Math.floor(Math.random() * (maxRounded - minRounded + 1)) +
    min +
    Math.random()
  );
}

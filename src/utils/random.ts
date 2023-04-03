export function randomId(): string {
  const uint32 = window.crypto.getRandomValues(new Uint32Array(1))[0];
  return uint32.toString(16);
}

export function randomNumber(min = 0, max: number) {
  const difference = max - min;
  let rand = Math.random();
  rand = Math.floor(rand * difference) + min;
  return rand;
}
